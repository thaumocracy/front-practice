let food = 'whatever'
const change = () => {
  console.log(`first ${food}`)
  let food = 'another' // <- let keyword forces an error,since it doesnt hoist
  console.log(`Another ${food}`)
}
change()