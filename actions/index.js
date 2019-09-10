import Router from 'next/router'
import cookie from 'cookie'

import {
  LOGIN_USER,
  REGISTER_USER,
  GET_SAVED_LINKS,
  LOGOUT_USER
} from '../constants/action-types'

import apiClient from '../src/api/client.js'
const client = new apiClient()

export const loginUser = (email, password) => {
  return (dispatch) => {
    client.login(email, password).then(res => {
      Router.push('/inbox')
      if (process.browser) {
        document.cookie = `zipp-token=${res.data.token}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
      }
      dispatch({ type: LOGIN_USER, payload: res.data});
    }).catch(e => {
      // dispatch({type: LOGIN_USER_FAILED, paylod: res})
    })
  }
}

export const validateToken = (token) => {
  return (dispatch) => {
    client.validateToken(token).then(res => {
      Router.push('/inbox')
      dispatch({type: LOGIN_USER, payload: res.data})
    }).catch(e => {
      // not successful
    })
  }
}

export const registerUser = (email, password) => {
  return (dispatch) => {
    client.register(email, password).then(res => {
      Router.push('/inbox')
      dispatch({type: REGISTER_USER, payload: res.data})
    }).catch(e => {
      // do something
    })
  }
}

export const logoutUser = (token) => {
  return (dispatch) => {
    Router.push('/')
    if (process.browser) {
      document.cookie = `zipp-token= ; expires=Fri, 31 Dec 1970 23:59:59 GMT`
    }
    dispatch({type: LOGOUT_USER})
  }
}

export const getSavedLinks = (email, token) => {
  return (dispatch) => {
    if (email && token) {
      client.getSavedLinks(email, token).then(res => {
        dispatch({type: GET_SAVED_LINKS, payload: res.data})
      }).catch(e => {
        // do something
      })
    } else {
      if (process.browser) {
        Router.replace('/login')
      }
    }
  }
}
