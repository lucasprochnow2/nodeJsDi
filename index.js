import ExpressServer from './src/server.js'
import { initializeInjection } from './src/injection.js'

const server = new ExpressServer()

server.initialize()
initializeInjection()
