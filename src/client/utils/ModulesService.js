import Router from 'next/router'
const isBrowser = typeof window !== 'undefined'

export const getModule = () => {
  const module = isBrowser ? localStorage.getItem('module') : null
  return module ? JSON.parse(localStorage.getItem('module')) : {}
}

export const setModule = (value, name) => {
  Router.push('/')
  localStorage.setItem('module', JSON.stringify({ name: name, value: value }))
  return
}

export const isModuleChosen = () => {
  return isBrowser && localStorage.getItem('module') ? true : false
}
