import express from 'express'
import { createRender } from 'vite-plugin-ssr'
import * as vite from 'vite'

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

startServer()

async function startServer() {
  const app = express()

  let viteDevServer
  if (isProduction) {
    app.use(
      express.static(`${root}/dist/client`, {
        index: false
      })
    )
  } else {
    viteDevServer = await vite.createServer({
      root,
      server: {
        middlewareMode: true
      }
    })
    app.use(viteDevServer.middlewares)
  }

  const render = createRender({
    viteDevServer,
    isProduction,
    root
  })
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl
    const contextProps = {}
    const html = await render({ url, contextProps })
    if (!html) {
      next()
      return
    }
    res.send(html)
  })

  const port = 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}