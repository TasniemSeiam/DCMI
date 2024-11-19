// import React from 'react'
import { Route, Router, Routes } from "react-router-dom";
// import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const AppRouters = () => {
  return (
    <Router>
      {/*<NavBar />*/}
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouters;
