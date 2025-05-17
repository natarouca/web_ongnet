import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Header from './pages/Header/header'
import Ong from './pages/Ong/ong'
import Cliente from './pages/Cliente/cliente'
import Loginong from './pages/Loginong/loginOng'
import Servicos from './pages/Servicos/servicos'
import Quemsomos from './pages/Quemsomos/quemsomos'
import Home_new from './pages/Home/home_new'
import Crudong from './pages/Crudong/ongcrud'
import Item from './pages/Item/item'
import OngPerfil from "./pages/Ong/ongperfil"
function RoutesApp() {

        return (
                <BrowserRouter>
                        {/* < Header /> */}
                        <Routes>

                                <Route path="/" element={<Loginong />} />

                                <Route element={<Layout/>}>


                                <Route path="/home_new" element={<Home_new />} />
                                <Route path="/ong" element={<Ong />} />
                                <Route path="/ongcrud" element={<Crudong />} />
                                <Route path="/loginOng" element={<Loginong />} />
                                <Route path="/quemsomos" element={<Quemsomos />} />
                                <Route path="/cliente" element={<Cliente />} />
                                <Route path="/item" element={<Item />} />
                                <Route path="/ongperfil" element={<OngPerfil />} />
                                </Route>
                        </Routes>
                </BrowserRouter>
        );
}
function Layout() {
        return (
                <>
                        <Header />
                        <main>
                                <Outlet /> 
                        </main>
                </>
        );
}
export default RoutesApp;