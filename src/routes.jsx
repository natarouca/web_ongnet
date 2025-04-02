import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './pages/Header/header'
import Ong from './pages/Ong/ong'
import Cliente from './pages/Cliente/cliente'
import Login from './pages/Login/login'
import Home from './pages/Home/home'
import Loginong from './pages/Loginong/loginOng'
import Servicos from './pages/Servicos/servicos'
import Quemsomos from './pages/Quemsomos/quemsomos'
import Loginadm from "./pages/Loginadm/loginadm"
import Home_new from './pages/Home/home_new'

function RoutesApp() {

        return (
                <BrowserRouter>
                < Header />
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/ong" element={<Ong />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/loginOng" element={<Loginong />} />
                                <Route path="/servicos" element={<Servicos />} />
                                <Route path="/faleconosco" element={<Quemsomos />} />
                                <Route path="/home_new" element={<Home_new />} />
                                <Route path="/loginadm" element={<Loginadm/>} />
                                <Route path="/cliente" element={<Cliente/>} />
                        </Routes>
                </BrowserRouter>
        );
}
export default RoutesApp;