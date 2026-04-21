"""
Walk JSON object and translate string leaves to French (Google via deep-translator).
Skips very short tokens, URLs, and obvious non-translatable codes.
"""
import json
import re
import sys
import time
from pathlib import Path

try:
    from deep_translator import GoogleTranslator
except ImportError:
    print("pip install deep-translator", file=sys.stderr)
    sys.exit(1)

translator = GoogleTranslator(source="en", target="fr")
MAX_CHUNK = 4500


def translate_chunk(chunk: str) -> str:
    last_err = None
    for attempt in range(8):
        try:
            return translator.translate(chunk)
        except Exception as e:
            last_err = e
            time.sleep(min(30, 1.5 ** attempt))
    print(f"FAIL chunk after retries: {last_err!s}", file=sys.stderr)
    return chunk


def translate_one(s: str) -> str:
    if len(s) <= MAX_CHUNK:
        return translate_chunk(s)
    parts = []
    pos = 0
    while pos < len(s):
        end = min(pos + MAX_CHUNK, len(s))
        chunk = s[pos:end]
        if end < len(s):
            cut = chunk.rfind("</p>")
            if cut > 1200:
                chunk = chunk[: cut + 4]
            else:
                cut2 = chunk.rfind("\n\n")
                if cut2 > 1200:
                    chunk = chunk[:cut2]
        parts.append(translate_chunk(chunk))
        time.sleep(0.15)
        pos += len(chunk)
    return "".join(parts)

def is_asset_path(s: str) -> bool:
    t = s.strip()
    return bool(re.match(r"^/[\w./-]+\.(webp|png|jpg|jpeg|gif|svg)$", t, re.I))

# Do not translate (game / UI tokens)
SKIP_FULL = {
    "★★★★★",
    "★★★★☆",
    "01",
    "02",
    "03",
    "1",
    "2",
    "3",
    "4",
    "5",
    "–",
}


def should_translate(s: str) -> bool:
    if not isinstance(s, str):
        return False
    t = s.strip()
    if len(t) < 2:
        return False
    if s in SKIP_FULL:
        return False
    if is_asset_path(s):
        return False
    st = s.strip()
    if st.startswith("http://") or st.startswith("https://"):
        return False
    # mostly numeric / symbols
    if re.fullmatch(r"[\d\s~+.,M-]+", t) and len(t) < 25:
        return False
    return True


def walk_translate(obj, stats):
    if isinstance(obj, dict):
        return {k: walk_translate(v, stats) for k, v in obj.items()}
    if isinstance(obj, list):
        return [walk_translate(v, stats) for v in obj]
    if isinstance(obj, str) and should_translate(obj):
        stats["n"] += 1
        try:
            out = translate_one(obj)
            time.sleep(0.15)
            return out
        except Exception as e:
            print(f"WARN translate fail #{stats['n']}: {e!s}", file=sys.stderr)
            stats["fail"] += 1
            time.sleep(3)
            return obj
    return obj


def main():
    inp = Path(sys.argv[1])
    outp = Path(sys.argv[2])
    data = json.loads(inp.read_text(encoding="utf-8"))
    stats = {"n": 0, "fail": 0}
    fr = walk_translate(data, stats)
    outp.write_text(json.dumps(fr, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Translated ~{stats['n']} strings, fails={stats['fail']}")


if __name__ == "__main__":
    main()
