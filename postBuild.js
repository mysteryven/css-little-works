import path from 'path'
import fs from 'fs/promises'
import cheerio from 'cheerio'
import works from './src/works'

async function postBuild() {
    const indexHTML = await fs.readFile('dist/index.html', 'utf-8')

    for (let { name } of works) {
        const $ = cheerio.load(indexHTML)
        $('title').text(name)
        fs.writeFile(`dist/${name}.html`, indexHTML)
    }
}

postBuild()