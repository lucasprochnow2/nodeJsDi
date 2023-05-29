const namespaceMapper = new Map([
  ['services', 'service'],
  ['repositories', 'repository']
])

export const formatName = (_, descriptor) => {
  const fileName = descriptor.name
  const pathSplit = descriptor.path.split('/')

  // service / repository
  const namespace = namespaceMapper.get(pathSplit[pathSplit.length - 3])
  const upperNamespace = namespace.charAt(0).toUpperCase() + namespace.substring(1)

  return fileName + upperNamespace
}
