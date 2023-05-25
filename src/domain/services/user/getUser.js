export default function userService (args) {
  console.log('***** args', args)

  return async function GetUser () {
    setTimeout(() => {
      return Promise.resolve({ name: 'My User' })
    }, 500)
  }
}
