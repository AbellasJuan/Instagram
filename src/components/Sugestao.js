export default function Sugestao(props){
    return(
        <div className="sugestao">
            <div className="usuario">
                <img src={props.userImg} alt="" />
                <div className="texto">
                <div className="nome">{props.userName}</div>
                <div className="razao">{props.ifIsFollower}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
            </div>
    )
};