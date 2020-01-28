const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')
const template = require('fs').readFileSync('./src/index.template.html', 'utf-8')
const serverBundle = require('./public/vue-ssr-server-bundle.json')
const clientManifest = require('./public/vue-ssr-client-manifest.json')

const app = express()
const port = process.env.PORT || 3000

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
})

app.use(express.static('public'))
app.get('*', (req, res) => {
    const context = { url: req.url }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.error(err)
            if (err.code === 404) {
                res.status(404).end('Page not found')
            } else {
                res.status(500).end('Internal Server Error')
            }
        } else {
            res.end(html)
        }
    })
})

app.listen(port, () => console.log(`http://localhost:${port}`))
