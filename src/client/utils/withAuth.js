import React, { Component } from 'react'
import Router from 'next/router'
import Auth from './AuthService'

export default function withAuth(AuthComponent) {
  return class Authenticated extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: true
      }
    }

    componentDidMount() {
      if (!Auth.loggedIn()) {
        Router.push('/login')
      }
      this.setState({ isLoading: false })
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <div>LOADING....</div>
          ) : (
            <AuthComponent auth={Auth} {...this.props} />
          )}
        </div>
      )
    }
  }
}
