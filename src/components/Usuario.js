export default function Usuario(props){
    return(
        <div className="usuario">
            <img src={props.img} alt=""/>
            <div className="texto">
            <strong>{props.userName}</strong>
            {props.fullName}
            </div>
        </div>
    )
};