import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers"; // Assurez-vous d'avoir le chemin correct

import Home from "./pages/Home";
import Login from "./pages/Login";

import Footer from "../src/components/Footer";
import Header from "./components/Header";

import "./index.css";

const store = configureStore({
    reducer: rootReducer,
    // Ajoutez d'autres options si nécessaire
});

const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
            <Footer />
        </React.StrictMode>
    </Provider>
);
