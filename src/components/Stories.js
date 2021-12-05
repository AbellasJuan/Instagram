import Story from "./Story";

const stories = [
    {
        img: "assets/img/9gag.svg",
        userName: "9gag"
    },
    {
        img: "assets/img/9gag.svg",
        userName: "meowed"
    },
    {
        img: "assets/img/9gag.svg",
        userName: "barked"
    },
    {
        img: "assets/img/9gag.svg",
        userName: "nathanwpylestrangeplanet"
    },
    {
        img: "assets/img/9gag.svg",
        userName: "wawawicomics"
    },
    {
        img: "assets/img/9gag.svg",
        userName: "respondeai"
    },
    {
        img: "assets/img/9gag.svg",
        userName: "filomoderna"
    },
    {
        img: "assets/img/9gag.svg",
        userName: "memeriagourmet"
    }    
]

export default function Stories(){
            return(
        <div className="stories">
     
           {stories.map ((storie, index) => <Story key={index} img={storie.img} userName={storie.userName}/>)}

            <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
        )
};