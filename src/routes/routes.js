import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landingPage";
import SignIn from "../pages/signIn";
import SignUpLanding from "../pages/signUpLanding";
import Home from "../pages/users/home";

const Ways = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="users/home" element={<Home />} />
        <Route exact path="signIn" element={<SignIn />} />
        <Route exact path="signUpLanding" element={<SignUpLanding />} />
      </Routes>
    </>
  );
};

export default Ways;
