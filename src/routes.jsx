import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './pages/Header/header'
import Ong from './pages/Ong/ong'
import Cliente from './pages/Cliente/cliente'
import Login from './pages/Login/login'
import Home from './pages/Home/home'
import Loginong from './pages/Loginong/loginOng'
import Servicos from './pages/Servicos/servicos'
import Faleconosco from './pages/Faleconosco/faleconosco'
function RoutesApp() {

        return (
                <BrowserRouter>
                < Header />
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/cliente" element={<Cliente />} />
                                <Route path="/ong" element={<Ong />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/loginOng" element={<Loginong />} />
                                <Route path="/servicos" element={<Servicos />} />
                                <Route path="/faleconosco" element={<Faleconosco />} />
                        </Routes>
                </BrowserRouter>
        );
}
export default RoutesApp;