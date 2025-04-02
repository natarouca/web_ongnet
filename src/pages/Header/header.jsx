import { Link } from 'react-router-dom'
import '../css/style.css';
import Logo from '../img/logongnet.jpg'
function Header () {

    return (
        <header> 
           <div>
           <a href="/"> <img id='logo-ongnet' src={Logo} alt="Logo" title='OngNet' /></a>
           </div>
            <nav>
                <a href="/" className='abas'> Início</a>
                
                <a href="/ong" className='abas'>Cadastro ONG</a>
                
                <a href="/faleconosco" className='abas'>Fale conosco</a>

                <a href="/home_new" className='abas'>Home New</a>

                
                <a href="/cliente" className='abas'>Cliente</a>
            </nav>
        </header>
          
    )
}
export default Header;