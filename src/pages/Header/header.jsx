import { Link } from 'react-router-dom'
import '../css/style.css';
import Logo from '../img/logongnet.jpg'

function Header() {

    return (
        <header>
  
            <nav>

            <li className='link-nav'><a href="/home_new" className='abas'>Quero doar </a></li>
                <li className='link-nav'><a href="/loginOng" className='abas'>Sou ONG </a></li>
                
            <div className='logo'>
                    <a href="/home_new"> <img id='logo-ongnet' src={Logo} alt="Logo" title='OngNet' /></a>
                </div>
             
              
                <li className='link-nav'><a href="/ong" className='abas'>Cadastre-se</a></li>
                <li className='link-nav'><a href="/ongcrud" className='abas'>Ong crud</a></li>
            

            </nav>
        </header>

    )
}
export default Header;