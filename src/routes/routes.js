import { Routes, Route } from "react-router-dom"

import LandingPage from "../pages/landingPage"
import Home from "../pages/users/home"
import Prestadores from "../pages/users/prestador"



const Ways = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/users/prestadores/:idSeller" element={<Prestadores />}/>
            </Routes>
        </>
    )
}

export default Ways