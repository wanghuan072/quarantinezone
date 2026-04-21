import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const { guides } = await import(pathToFileURL(path.join(root, 'src/data/guide/en.js')).href)
const { games } = await import(pathToFileURL(path.join(root, 'src/data/game/en.js')).href)
const { news } = await import(pathToFileURL(path.join(root, 'src/data/news/en.js')).href)

fs.writeFileSync(path.join(root, 'tmp-guide-en.json'), JSON.stringify(guides), 'utf8')
fs.writeFileSync(path.join(root, 'tmp-game-en.json'), JSON.stringify(games), 'utf8')
fs.writeFileSync(path.join(root, 'tmp-news-en.json'), JSON.stringify(news), 'utf8')
console.log('exported guide/game/news json')
