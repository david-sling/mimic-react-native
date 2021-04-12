const capitalize = (str: string): string => {
  var [first, ...rest] = str
  first = first.toUpperCase()
  return first + rest.join('')
}
export default capitalize
