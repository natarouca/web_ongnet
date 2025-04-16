import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Header from './pages/Header/header'
import Ong from './pages/Ong/ong'
import Cliente from './pages/Cliente/cliente'
import Home from './pages/Home/home'
import Loginong from './pages/Loginong/loginOng'
import Servicos from './pages/Servicos/servicos'
import Quemsomos from './pages/Quemsomos/quemsomos'
import Loginadm from "./pages/Loginadm/loginadm"
import Home_new from './pages/Home/home_new'

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
                                <Route path="/servicos" element={<Servicos />} />
                                <Route path="/quemsomos" element={<Quemsomos />} />
                                <Route path="/loginadm" element={<Loginadm />} />
                                <Route path="/cliente" element={<Cliente />} />

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