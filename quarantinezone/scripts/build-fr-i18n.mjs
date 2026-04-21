/**
 * Build src/i18n/locales/fr.js from English locale using @vitalets/google-translate-api.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { translate } from '@vitalets/google-translate-api'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SKIP_FULL = new Set(['★★★★★', '★★★★☆', '01', '02', '03', '1', '2', '3', '4', '5', '–'])

function isAssetPath(s) {
  return /^\/[\w./-]+\.(webp|png|jpg|jpeg|gif|svg)$/i.test(s.trim())
}

function shouldTranslate(s) {
  if (typeof s !== 'string') return false
  const t = s.trim()
  if (t.length < 2) return false
  if (SKIP_FULL.has(s)) return false
  if (isAssetPath(s)) return false
  const st = s.trim()
  if (st.startsWith('http://') || st.startsWith('https://')) return false
  if (/^[\d\s~+.,M-]+$/.test(t) && t.length < 25) return false
  return true
}

async function translateChunk(text) {
  let lastErr
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const { text: out } = await translate(text, { to: 'fr' })
      return out
    } catch (e) {
      lastErr = e
      await new Promise((r) => setTimeout(r, 800 * (attempt + 1)))
    }
  }
  console.warn('translate failed, keeping original:', lastErr?.message || lastErr)
  return text
}

async function translateLong(s) {
  const MAX = 4500
  if (s.length <= MAX) return translateChunk(s)
  let out = ''
  let pos = 0
  while (pos < s.length) {
    let end = Math.min(pos + MAX, s.length)
    let chunk = s.slice(pos, end)
    if (end < s.length) {
      const cut = chunk.lastIndexOf('</p>')
      if (cut > 1200) chunk = chunk.slice(0, cut + 4)
      else {
        const cut2 = chunk.lastIndexOf('\n\n')
        if (cut2 > 1200) chunk = chunk.slice(0, cut2)
      }
    }
    out += await translateChunk(chunk)
    await new Promise((r) => setTimeout(r, 200))
    pos += chunk.length
  }
  return out
}

let count = 0

async function walk(obj) {
  if (typeof obj === 'string') {
    if (!shouldTranslate(obj)) return obj
    count++
    if (count % 20 === 0) console.log('…', count, 'strings')
    const r = await translateLong(obj)
    await new Promise((res) => setTimeout(res, 180))
    return r
  }
  if (Array.isArray(obj)) {
    const arr = []
    for (const x of obj) arr.push(await walk(x))
    return arr
  }
  if (obj && typeof obj === 'object') {
    const o = {}
    for (const k of Object.keys(obj)) {
      o[k] = await walk(obj[k])
    }
    return o
  }
  return obj
}

async function main() {
  const enUrl = pathToFileURL(path.join(root, 'src/i18n/locales/en.js')).href
  const en = (await import(enUrl)).default
  console.log('Translating i18n en → fr, string count estimate …')
  const fr = await walk(JSON.parse(JSON.stringify(en)))
  const body = JSON.stringify(fr, null, 2)
  fs.writeFileSync(path.join(root, 'src/i18n/locales/fr.js'), `export default ${body}\n`, 'utf8')
  console.log('Done. Total user strings translated:', count)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
