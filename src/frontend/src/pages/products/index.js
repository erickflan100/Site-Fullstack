import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Product = () => {

  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()

    navigate('/')
  }

  const handleBack = (e) => {
    e.preventDefault()

    navigate('/home')
  }

  return (
    <div className="product">
      <header className='header'>
        <button className='btn' onClick={(e) => handleLogout(e)}>Logout</button>
        <button className='btn' onClick={(e) => handleBack(e)}>Voltar</button>
      </header>
      <main>
        <section>
          <div className='cards'>
            <div className='card'>Responsividade</div>
            <div className='card'>Segurança</div>
            <div className='card'>Design</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Product;