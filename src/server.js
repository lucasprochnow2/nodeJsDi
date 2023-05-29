import express from 'express'

import initializeInjection from './injection.js'
import routes from './rest/routes.js'

const PORT = 3000

export default class ExpressServer {
  server
  container

  constructor () {
    this.server = express()
  }

  initializeInjection () {
    const container = initializeInjection()
    this.container = container
  }

  initializeRouters () {
    this.server.use((req, _, next) => {
      req.container = this.container
      return next()
    })
    this.server.use('/user', routes.user)
    this.server.use('/document', routes.document)
  }

  initialize () {
    this.initializeInjection()
    this.initializeRouters()

    this.server.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`)
    })
  }
}
