import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../redux/user.actions";
import Account from "../components/Account";
import AccountData from "../data/CardsData.json";
import User from "../components/User";

/* User profile page */
function UserProfile () {

    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch();

    /* Fonction asynchrone qui récupère les données utilisateur et les met à jour avec useEffect */
    useEffect(() => {
        if (token) {
            const userData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        /* 
                            Vérifier que la réponse à la requête est bien récupérée
                            console.log(data) 
                        */
                        const userData = {
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstname: data.body.firstName,
                            lastname: data.body.lastName,
                            username: data.body.userName
                        }
                        /* Renvoie les données utilisateur dans l'état redux */
                        dispatch(userProfile(userData));
                    } else {
                        console.log("error while retrieving profile");
                    }
                } catch (error) {
                    console.error(error);
                };
            };
            userData();
        }
    }, [dispatch, token]);

    return (
        <div className='profile-page'>
            <main className='bg-dark'>
                {/* Return user componant */}
                <User />
                {/* Renvoie les éléments du fichier json*/}
                {AccountData.map((data) => (
                    /* Return account component */
                    <Account 
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
            </main>
        </div>
    )
}

export default UserProfile