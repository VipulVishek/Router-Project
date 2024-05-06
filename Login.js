import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome back"
    desc1="build skills for today,tommrrow,and beyond"
    desc2="education to future-proof your career"
    image={loginImg}
    formType="login"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
