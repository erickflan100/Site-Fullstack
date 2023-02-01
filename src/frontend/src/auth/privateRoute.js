import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
    const user = localStorage.getItem('logado')
    return user ? children : <Navigate to='/'/>
}




// import React from "react"
// import { Navigate } from "react-router-dom"

// export function PrivateRoute({ children }) {
//     const user = localStorage.getItem("Logado")
//     console.log(user)

//     return user !== null ? children : <Navigate to='/login'/>
// }