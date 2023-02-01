import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Home = () => {

  const navigate = useNavigate()

  const handleProducts = (e) => {
    e.preventDefault()

    navigate('/products')
  }

  const handleLogout = (e) => {
    e.preventDefault()

    navigate('/')
  }

  return (
    <div className="home">
      <header className='header'>
        <button className='btn' onClick={(e) => handleLogout(e)}>Logout</button>
      </header>
      <main>
        <section>
          <div className='div-sect'>
            <p>Somos uma Agência de Criação de Sites e Apps.</p>
            <div className='cards'>
              <div className='card'>Responsividade</div>
              <div className='card'>Segurança</div>
              <div className='card'>Design</div>
            </div>
            <button className='btn-products' onClick={(e) => handleProducts(e)}>Produtos</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;