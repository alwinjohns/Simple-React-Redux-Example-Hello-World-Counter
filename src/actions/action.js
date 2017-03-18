export const HELLO_WORLD = 'HELLO_WORLD'

export const helloWorldAction = () => {
  console.log('hellow world action')
  return {
    type: HELLO_WORLD,
  }
}
