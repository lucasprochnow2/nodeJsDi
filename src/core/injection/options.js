import { Lifetime } from 'awilix'

import { formatName } from './formatName.js'

export default {
  formatName,
  lifetime: Lifetime.SINGLETON,
  esModules: true
}
