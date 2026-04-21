import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

async function main() {
  const enUrl = pathToFileURL(path.join(root, 'src/i18n/locales/en.js')).href
  const en = (await import(enUrl)).default
  fs.writeFileSync(path.join(root, 'tmp-i18n-en.json'), JSON.stringify(en), 'utf8')
  console.log('Wrote tmp-i18n-en.json', JSON.stringify(en).length)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
