import express from 'express'
import routes from './rest/routes.js'

const PORT = 3000

export default class ExpressServer {
  server

  constructor () {
    this.server = express()
  }

  getServer () {
    return this.server
  }

  initializeRouter () {
    this.server.use('/user', routes.user)
    this.server.use('/document', routes.document)
  }

  initialize () {
    this.initializeRouter()

    this.server.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`)
    })
  }
}
