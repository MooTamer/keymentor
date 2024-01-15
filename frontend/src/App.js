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
import Navbar from "./pages/components/navbar.jsx";
import Footer from "./pages/components/footer.jsx";
import stats from "./pages/components/stats.jsx";
import { useState, useEffect } from "react";

function App() {


  const [currentTheme, setCurrentTheme] = useState("");


  useEffect(() => {
    const changeTheme = async () => {
      try {
        setCurrentTheme(currentTheme);
        localStorage.setItem("theme", currentTheme);
        document
          .querySelector("html")
          .setAttribute("data-theme", currentTheme);
        console.log("documentTheme:", currentTheme);
      } catch (error) {
        console.error("Error fetching brand data:", error);
      }
    };
    changeTheme();
  }, [currentTheme]);
  // const [theme, setTheme] = useState("dark");
  return (
    <>
      {/* <div className={`theme-controller ${theme}`}> */}
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
      {/* </div> */}
    </>
  );
}
export default App;
