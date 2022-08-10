import React from 'react'
import { Navigate } from 'react-router-dom'
import { get } from './token.ts'

export default function PrivateRoute({ children }) {
  const  currentUser  = get()

  if (!currentUser) {
    return <Navigate to='/ingreso' />
  }

  return children;
}

