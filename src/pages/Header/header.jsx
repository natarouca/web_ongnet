import { Link } from 'react-router-dom'
import '../css/style.css';
import Logo from '../img/ongnet-logo.png'

function Header() {

  return (
    <header>
      <nav>
        <div className='logo'>
          <Link to="/home_new">
            <img id='logo-ongnet' style={{ width: 200 }} src={Logo} alt="Logo" title='Ongnet' />
          </Link>
        </div>
        
        <li className='link-nav'>
          <Link to="/home_new" className='abas'>Home</Link>
        </li>

           <li className='link-nav'>
          <Link to="/representanteong" className='abas'>Cadastre-se</Link>
        </li>

        <li className='link-nav'>
          <Link to="/login" className='abas'>Login</Link>
        </li>
      </nav>
    </header>
  )
}

export default Header;
