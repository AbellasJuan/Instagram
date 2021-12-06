import Sugestoes from "../components/Sugestoes/Sugestoes.js";
import Usuario from "./Usuario";

export default function Sidebar(){
    return(
        
      <div className="sidebar">
        <Usuario img="assets/img/michael-jordan.jpg" userName="MJ" fullName="Michael Jackson" />
        <Sugestoes/>
        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
 
    )
}