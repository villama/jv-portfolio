function composeClasses(...args: Array<string | null | undefined | false | 0>) {
  let output = ''
  args.forEach(arg => {
    if (arg) output += arg + ' '
  })
  return output.trim()
}

export default composeClasses
