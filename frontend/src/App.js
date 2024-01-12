import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../frontend/src/pages/home.jsx";
import NotFound from "../../frontend/src/pages/NotFound.jsx";
import Evaluate from "../../frontend/src/pages/evaluate.jsx";
import Training from "../../frontend/src/pages/training.jsx";
import Login from "../../frontend/src/pages/login.jsx";
import Signup from "../../frontend/src/pages/signup.jsx";
import Dashboard from "../../frontend/src/pages/dashborad.jsx";
import Ranks from "../../frontend/src/pages/ranks.jsx";
import Navbar from "./pages/navbar.jsx";
import Footer from "./pages/components/footer.jsx";

function App() {
  return (
    <>
      {/* <div className="mt-2.5 mb-16 mr-3.5 ml-3.5 shadow-11xl"> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/evaluate" element={<Evaluate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
