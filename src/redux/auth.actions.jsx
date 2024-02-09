import { LOGIN_SUCESS, LOGIN_FAIL, LOGOUT } from "./type.actions";

export const loginSucess = (token) => {
    return {
        type: LOGIN_SUCESS,
        payload: token,
    }
}

export const loginFailed = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}

export const logout = (token) => {
    return {
        type: LOGOUT,
    }
}
