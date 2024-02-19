import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../redux/auth.reducer";
import { userReducer } from "../redux/user.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
})
 
const store = configureStore({
     reducer: rootReducer,
     devTools: true 
})
 
 export default store
