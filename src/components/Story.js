export default function Story({img, userName}){

    return(
        <div className="story">
        <div className="imagem">
            <img src={img} alt=""/>
        </div>
        <div className="usuario">
            {userName}
        </div>
        </div>
    )
};