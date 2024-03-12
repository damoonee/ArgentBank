import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFailed, loginSucess } from "../redux/auth.actions";
import { isValidEmail, isValidPassword } from "../utils/regex";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "../css/Form.css"

function Form () {
   /* Permet de récupérer les données saisies par l'utilisateur dans le formulaire */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    /* Indique un message d'erreur si les données ne sont pas valides */
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    /* Fonction de formulaire asynchrone */
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        /* Gérer le message d'erreur */
        if (!isValidEmail(email)) {
            setErrorMessage("Invalid email adress");
            return;
        }
        if (!isValidPassword(password)) {
            setErrorMessage("Invalid password");
            return;
        }
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });
            if (response.ok) {
                const data = await response.json();
                /* 
                    Vérifier que la réponse à la requête est bien récupérée
                    console.log(data) 
                */
                const token = data.body.token;
                dispatch(loginSucess(token));
                sessionStorage.setItem("token", token);
                if (rememberMe) {
                    localStorage.setItem("token", token);
                }
                navigate('/profile');
            } else {
                const error = "Incorrect email/password"
                dispatch(loginFailed(error));
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className='sign-in-content'>
            <FontAwesomeIcon icon={faUserCircle} className="sign-logo" /> 
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <label htmlFor='username'>Username</label>
                    <input 
                        id='username' 
                        type='text'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='password'>Password</label>
                    <input 
                        id='password' 
                        type='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className='input-remember'>
                    <input 
                        id='remember-me' 
                        type='checkbox' 
                        checked={rememberMe}
                        onChange={(event) => setRememberMe(event.target.checked)}
                    />
                    <label htmlFor='remember-me'>Remember me</label>
                </div>
                <button className="sign-in-button">
                    Sign In
                </button>
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
            </form>
        </section>
    )
}

export default Form