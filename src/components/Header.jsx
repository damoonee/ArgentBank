import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/argentBankLogo.webp';
import { logout } from '../redux/auth.actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "../css/Header.css";

function Header () {
    
    /* Met à jour les données utilisateur sur le composant d'en-tête à partir du redux d'état */
    const isConnected = useSelector((state) => state.auth.token);
    const firstname = useSelector((state) => state.user.userData.firstname);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logoutHandler = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    }
    return (
        <header>
            <h1 className='sr-only'>Argent Bank</h1>
            <nav>
                <Link to="/">
                    <img src={Logo} alt="Bank Logo" />
                </Link> 
                {isConnected ? (
                    <div className='connected'>
                        <Link to='/profile'>
                            <FontAwesomeIcon icon={faUserCircle} className="sign-logo" />   
                            <p>{firstname}</p>
                        </Link>
                        <Link to='/' onClick={logoutHandler}>
                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            <p> Sign out </p>
                        </Link>
                    </div>
                ) : (
                    <div className='not-connected'>
                        <Link to='/login' >
                            <FontAwesomeIcon icon={faUserCircle} className="sign-logo" />
                            <p>Sign In</p>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header