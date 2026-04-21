/**
 * Write src/i18n/locales/fr.js and data fr modules from translated JSON dumps.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

function writeLocale() {
  const p = path.join(root, 'tmp-i18n-fr.json')
  if (!fs.existsSync(p)) {
    console.error('Missing', p)
    process.exit(1)
  }
  const data = JSON.parse(fs.readFileSync(p, 'utf8'))
  const body = JSON.stringify(data, null, 2)
  fs.writeFileSync(path.join(root, 'src/i18n/locales/fr.js'), `export default ${body}\n`, 'utf8')
  console.log('Wrote fr.js locale')
}

function writeGuides() {
  const p = path.join(root, 'tmp-guide-fr.json')
  const data = JSON.parse(fs.readFileSync(p, 'utf8'))
  fs.writeFileSync(
    path.join(root, 'src/data/guide/fr.js'),
    `export const guides = ${JSON.stringify(data, null, 2)}\n`,
    'utf8'
  )
  console.log('Wrote guide/fr.js')
}

function writeGames() {
  const p = path.join(root, 'tmp-game-fr.json')
  const data = JSON.parse(fs.readFileSync(p, 'utf8'))
  fs.writeFileSync(
    path.join(root, 'src/data/game/fr.js'),
    `export const games = ${JSON.stringify(data, null, 2)}\n`,
    'utf8'
  )
  console.log('Wrote game/fr.js')
}

function writeNews() {
  const p = path.join(root, 'tmp-news-fr.json')
  const data = JSON.parse(fs.readFileSync(p, 'utf8'))
  fs.writeFileSync(
    path.join(root, 'src/data/news/fr.js'),
    `export const news = ${JSON.stringify(data, null, 2)}\n`,
    'utf8'
  )
  console.log('Wrote news/fr.js')
}

const mode = process.argv[2] || 'all'
if (mode === 'locale' || mode === 'all') writeLocale()
if (mode === 'data' || mode === 'all') {
  writeGuides()
  writeGames()
  writeNews()
}
