import { Link } from 'react-router-dom'
import '../css/style.css';
import Logo from '../img/ongnet-logo.png'

function Header() {

    return (
        <header>
            <nav>
                <li className='link-nav'>
                  <Link to="/loginOng" className='abas'>Login</Link>
                </li>
                <li className='link-nav'>
                  <Link to="/itemCrud" className='abas'>Item</Link>
                </li>
                <li className='link-nav'>
                  <Link to="/representanteong" className='abas'>Cadastre-se</Link>
                </li>
                <div className='logo'>
                    <Link to="/home_new">
                        <img id='logo-ongnet' style={{ width: 200 }} src={Logo} alt="Logo" title='Ongnet' />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;
