export default function Navbar(){

    return(
        <div className="navbar">
        <div className="container">
        <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img src="assets/img/logo.png" alt=""/>
        </div>

        <div className="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div className="instagram-mobile">
            <img src="assets/img/logo.png" alt=""/>
        </div>

        <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>

        <div className="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>

        <div className="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        </div>
        </div>
    )
};