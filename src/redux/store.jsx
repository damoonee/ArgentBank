// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
    reducer: rootReducer,
    // Ajoutez d'autres options si nécessaire
});

export default store;
