import awilix from 'awilix'

import options from './core/injection/options.js'
import modulesPathList from './core/injection/modulesPathList.js'

export default function injection () {
  const container = awilix.createContainer()

  container.loadModules(
    modulesPathList,
    options
  )

  return container
}
