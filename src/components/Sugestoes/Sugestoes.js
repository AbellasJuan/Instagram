import Sugestao from "./Sugestao.js";


const sugestoes = [
    {
        userImg:"assets/img/chris.jpeg",
        userName:"chris",
        ifIsFollower:"Segue você",
    },
    {
        userImg:"assets/img/greg.jpeg",
        userName:"greg",
        ifIsFollower:"Segue você",
    },
    {
        userImg:"assets/img/casell.jpeg",
        userName:"casell",
        ifIsFollower:"Segue você",
    },
    {
        userImg:"assets/img/manute.jpeg",
        userName:"manute",
        ifIsFollower:"Novo no Instagram",
    },
    {
        userImg:"assets/img/calvin.jpeg",
        userName:"calvin",
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