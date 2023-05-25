import awilix, { Lifetime } from 'awilix'

export function initializeInjection () {
  const container = awilix.createContainer()

  container.loadModules(
    [
      'src/domain/services/**/*.js'
    ],
    {
      formatName: 'camelCase',
      lifetime: Lifetime.SINGLETON
    }
  )
  console.log(container)
  return container
}
