import Sugestao from "./Sugestao.js";


const sugestoes = [
    {
        userImg:"assets/img/bad.vibes.memes.svg",
        userName:"bad.vibes.memes",
        ifIsFollower:"Segue você",
    },
    {
        userImg:"assets/img/chibirdart.svg",
        userName:"chibirdart",
        ifIsFollower:"Segue você",
    },
    {
        userImg:"assets/img/razoesparaacreditar.svg",
        userName:"razoesparaacreditar",
        ifIsFollower:"Segue você",
    },
    {
        userImg:"assets/img/adorable_animals.svg",
        userName:"adorable_animals",
        ifIsFollower:"Novo no Instagram",
    },
    {
        userImg:"assets/img/smallcutecats.svg",
        userName:"smallcutecats",
        ifIsFollower:"Segue você",
    },
    
]

export default function Sugestoes(){       
    
    return (
        
        <div className="sugestoes">
            <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>

            {sugestoes.map ((sugestao, index)=> ( <Sugestao key={index} userImg={sugestao.userImg} userName={sugestao.userName} ifIsFollower={sugestao.ifIsFollower}/>))}

        </div>

    )
};