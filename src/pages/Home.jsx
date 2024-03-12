import React from "react"
import Banner from "../components/Banner"
import Item from "../components/Items"
import ItemsData from "../data/ItemsData.json"
import iconChat from "../assets/icon-chat.png"
import iconMoney from "../assets/icon-money.png"
import iconSecurity from "../assets/icon-security.png"
import "../css/Home.css"

function Home() {
    const imageData = {
        "icon-chat.png": iconChat,
        "icon-money.png": iconMoney,
        "icon-security.png": iconSecurity,
    }

    return (
        <div className="homepage">
            <main>
                { /* Renvoie la bannière*/ }
                <Banner />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    {/* Renvoie les éléments du fichier json*/}
                    {ItemsData.map((data) => (
                        < Item
                            key={data.id}
                            image={imageData[data.image]}
                            descritionImage={data.descriptionImage}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </section>
            </main>
        </div>
    )
}
export default Home