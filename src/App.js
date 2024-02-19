import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; 

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile"

import Footer from "../src/components/Footer";
import Header from "./components/Header";

import "./index.css";

export default function Index () {

  const isConnected = useSelector((state) => state.auth.isConnected)

  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={isConnected ? <Profile /> : <Navigate to="/login" />} />
        </Routes>
      <Footer />
    </div>
  )
            
}
