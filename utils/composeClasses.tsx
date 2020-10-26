function composeClasses(...args: Array<string | null | undefined | false | 0>) {
  let output = ''

  args.forEach(arg => {
    if (!arg) return
    if (typeof arg !== 'string') throw new Error('All arguments must evaluate to string or falsey')
    output += arg + ' '
  })

  return output.trim()
}

export default composeClasses
