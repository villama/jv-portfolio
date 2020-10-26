function composeClasses(...args: Array<string | null | undefined | false | 0>) {
  let output = ''
  args.forEach(arg => {
    if (!arg) return
    output += arg + ' '
  })
  return output.trim()
}

export default composeClasses
