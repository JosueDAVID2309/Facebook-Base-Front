import React from 'react'

function page() {
    const token = localStorage.getItem("token")
  return (
    <>
    <p>¡Hola Ingresastes!, token generado:{token}</p>
    </>
  )
}

export default page
