import { Routes, Route } from "react-router-dom"

import LandingPage from "../pages/landingPage"
import Dashboard from "../pages/providers/dashboard"
import Agendamentos from "../pages/users/agendamentos"
import Carteira from "../pages/users/carteira"
import Enderecos from "../pages/users/enderecos"
import Home from "../pages/users/home"
import Prestadores from "../pages/users/prestador"



const Ways = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/users/prestadores/:idSeller" element={<Prestadores />}/>
                <Route exact path="/users/agendamentos" element={<Agendamentos />}/>
                <Route exact path="/users/enderecos" element={<Enderecos />}/>
                <Route exact path="/users/carteira" element={<Carteira />}/>

                <Route exact path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </>
    )
}

export default Ways