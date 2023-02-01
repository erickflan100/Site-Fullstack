import React, { useEffect, useState } from 'react'
import '../../style/index.css';
import { useNavigate } from 'react-router-dom';
import api from '../../api'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // console.log(`usuario ${username}, senha ${password}`)
  const navigate = useNavigate()
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await api.post('http://localhost:3333/',
      JSON.stringify({ username, password }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
      )
      localStorage.clear()
      localStorage.setItem('logado', JSON.stringify(response.data.id))
      navigate("/home")
    } catch (error) {
      if(!error?.response){
        localStorage.clear()
        alert('Erro ao acessar o servidor')
      }else if(error.response.status == 422){
        localStorage.clear()
        alert('Coloque um usuário ou senha correta')
      }
    }
  }
  
  return (
    <div className="main">
      <form className="login">
        LOGIN
        <input
          type="username"
          name="username"
          placeholder="Usuário"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          value="Enviar"
          onClick={(e) => handleSubmit(e)}>Login
        </button>
      </form>
    </div>
  );
}

export default Login;