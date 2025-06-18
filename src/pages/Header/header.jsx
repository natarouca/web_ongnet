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
                  <Link to="/login" className='abas'>Login</Link>
                </li>
              <li className='link-nav'>
                  <Link to="/itemCrud" className='abas'>Item</Link>
                </li> 
                 
              <li className='link-nav'>
                  <Link to="/adminCrud" className='abas'>Admin</Link>
                </li> 

                <li className='link-nav'>
                  <Link to="/ongcadastro" className='abas'>Cadastro ONG</Link>
                </li>
                 
                 <li className='link-nav'>
                  <Link to="/ongcrud" className='abas'>ONG crud</Link>
                </li> 
                  
               
            </nav>
        </header>
    )
}

export default Header;
