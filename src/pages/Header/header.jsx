import { Link } from 'react-router-dom'
import '../css/style.css';
import Logo from '../img/ongnet-logo.png'

function Header() {

    return (
        <header>
            <nav>
                <li className='link-nav'><a href="/loginOng" className='abas'>Sou ONG </a></li>
                <li className='link-nav'><a href="/ongperfil" className='abas'>Perfil</a></li>
                <li className='link-nav'><a href="/ong" className='abas'>Cadastre-se</a></li>
                <li className='link-nav'><a href="/item" className='abas'>Item</a></li>
              <div className='logo'>
                    <a href="/home_new"> <img id='logo-ongnet' style={{ width: 200 }} src={Logo} alt="Logo" title='Ongnet' /></a>
                </div>
            </nav>
        </header>

    )
}
export default Header;