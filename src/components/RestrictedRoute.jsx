import React from 'react'
import { useSelector } from 'react-redux'
import { selectAuthIsSignedIn } from '../redux/auth/selectors.js'
import { Navigate } from 'react-router-dom'

const RestrictedRoute = ({children}) => {
    const isSignetIn = useSelector(selectAuthIsSignedIn)
  return isSignetIn ? <Navigate to='/contacts' replace /> : children
}

export default RestrictedRoute