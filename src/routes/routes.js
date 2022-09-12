import { Routes, Route } from "react-router-dom"

import LandingPage from "../pages/landingPage"
import Home from "../pages/users/home"



const Ways = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="users/home" element={<Home />}/>
            </Routes>
        </>
    )
}

export default Ways