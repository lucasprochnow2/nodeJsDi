import awilix, { Lifetime } from 'awilix'

export function initializeInjection () {
  const container = awilix.createContainer()

  container.loadModules(
    [
      'src/domain/services/**/*.js'
    ],
    {
      formatName: (name) => {
        console.log('formatName', name)
        return name
      },
      lifetime: Lifetime.SINGLETON,
      esModules: true
    }
  )

  return container
}
