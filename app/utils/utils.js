export const objValsArray = (obj) => {
  let array = Object.keys(obj).map(k => obj[k])
  return array
}
