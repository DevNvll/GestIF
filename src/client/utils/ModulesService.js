export const getModule = () => {
  return JSON.parse(localStorage.getItem('module'))
}

export const setModule = (value, name) => {
  localStorage.setItem('module', JSON.stringify({ name: name, value: value }))
  return
}

export const isModuleChosen = () => {
  return localStorage.getItem('module') ? true : false
}
