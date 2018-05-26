import Router from 'next/router'
import modulos from '../modulos'

const isBrowser = typeof window !== 'undefined'

export const getModule = () => {
  const module = isBrowser ? localStorage.getItem('module') : null
  return module ? JSON.parse(localStorage.getItem('module')) : {}
}

export const setModule = (id, name) => {
  Router.push('/')
  localStorage.setItem('module', JSON.stringify({ name, id }))
  return
}

export const isModuleChosen = () =>
  isBrowser && localStorage.getItem('module') ? true : false

export const getModuleMenu = modulo =>
  modulos.filter(obj => obj.id === modulo)[0].menu
