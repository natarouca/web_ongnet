import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Header from './pages/Header/header'
import Ong from './pages/Ong/ong'
import Cliente from './pages/Cliente/cliente'
import Loginong from './pages/Loginong/loginOng'
import Quemsomos from './pages/Quemsomos/quemsomos'
import Home_new from './pages/Home/home_new'
import Item from './pages/Item/itemCrud'
import OngPerfil from "./pages/Ong/ongperfil"
import Crudong from './pages/Crudong/ongcrud'
import Admin from './pages/Admin/adminCrud'
import RepresentanteOng from "./pages/RepresentanteOng/representanteong"
import OngCadastro from "./pages/Ong/ongcadastro"
function RoutesApp() {

        return (
                <BrowserRouter>
                        {/* < Header /> */}
                        <Routes>

                                <Route path="/" element={<Loginong />} />

                                <Route element={<Layout/>}>


                                <Route path="/home_new" element={<Home_new />} />
                                <Route path="/ong" element={<Ong />} />
                                <Route path="/loginOng" element={<Loginong />} />
                                <Route path="/quemsomos" element={<Quemsomos />} />
                                <Route path="/cliente" element={<Cliente />} />
                                <Route path="/itemCrud" element={<Item />} />
                                <Route path="/ongperfil" element={<OngPerfil />} />
                                <Route path="/adminCrud" element={<Admin />} />
                                <Route path="/ongcadastro" element={<OngCadastro />} />
                                <Route path="/representanteong" element={<RepresentanteOng />} />
                                <Route path="/ongcrud" element={<Crudong />} />
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