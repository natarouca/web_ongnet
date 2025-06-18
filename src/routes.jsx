import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Header from './pages/Header/header'
import Ong from './pages/Ong/ong'
import Cliente from './pages/Cliente/cliente'
import Login from './pages/Loginong/login'
import Quemsomos from './pages/Quemsomos/quemsomos'
import Home_new from './pages/Home/home_new'
import Item from './pages/Item/itemCrud'
import OngPerfil from "./pages/Ong/ongperfil"
import Crudong from './pages/Crudong/ongcrud'
import Admin from './pages/Admin/adminCrud'
import RepresentanteOng from "./pages/RepresentanteOng/representanteong"
import OngCadastro from "./pages/Ong/ongcadastro"
import PerfilOngCrud from "./pages/PerfilOngCrud/ongcrudperfil"
function RoutesApp() {

        return (
                <BrowserRouter>
                        {/* < Header /> */}
                        <Routes>

                                <Route path="/" element={<Login />} />

                                <Route element={<Layout/>}>


                                <Route path="/home_new" element={<Home_new />} />
                                <Route path="/ong" element={<Ong />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/quemsomos" element={<Quemsomos />} />
                                <Route path="/cliente" element={<Cliente />} />
                                <Route path="/itemCrud" element={<Item />} />
                                <Route path="/ongperfil" element={<OngPerfil />} />
                                <Route path="/adminCrud" element={<Admin />} />
                                <Route path="/ongcadastro" element={<OngCadastro />} />
                                <Route path="/representanteong" element={<RepresentanteOng />} />
                                <Route path="/ongcrud" element={<Crudong />} />
                                  <Route path="/ongcrudperfil" element={<PerfilOngCrud />} />
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