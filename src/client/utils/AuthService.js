import Router from 'next/router'

const isBrowser = typeof window !== 'undefined';

export default class AuthService {
  constructor(domain) {
    this.domain = domain || ''
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
    this.loggedIn = this.loggedIn.bind(this)
  }

  login(email, password) {
    return this.fetch(`${this.domain}/api/auth`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => {
      return new Promise((resolve, reject) => {
        if (res.code === 'LOGIN_SUCCESS') {
          this.setToken(res.result.access_token)
          this.setProfile(res.result.profile)
          resolve()
        } else {
          reject(res.code)
        }
      })
    })
  }

  loggedIn() {
    const token = this.getToken()
    return !!token
  }

  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  getProfile() {
    const profile = isBrowser ? localStorage.getItem('profile') : null
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    return isBrowser ? localStorage.getItem('id_token') : null
  }

  logout() {
    Router.push('/login')
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
  }

  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  fetch(url, options) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.loggedIn()) {
      headers['auth'] = this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json())
  }
}
