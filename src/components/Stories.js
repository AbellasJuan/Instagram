import Story from "./Story";

const stories = [
    {
      img:"./assets/img/9gag.svg", 
      userName:"9gag"
    }, 
    {
      img:"./assets/img/meowed.svg", 
      userName:"meowed"
    }, 
    {
      img:"./assets/img/barked.svg", 
      userName:"barked"
    }, 
    {
      img:"./assets/img/nathanwpylestrangeplanet.svg", 
      userName:"nathanwpylestrangeplanet"
    }, 
    {
      img:"./assets/img/wawawicomics.svg", 
      userName:"wawawicomics"
    }, 
    {
      img:"./assets/img/respondeai.svg", 
      userName:"respondeai"
    }, 
    {
      img:"../assets/img/filomoderna.svg", 
      userName:"filomoderna"
    }, 
    {
      img:"./assets/img/memeriagourmet.svg", 
      userName:"memeriagourmet"
    }
  ];

export default function Stories(){
            return(
        <div className="stories">
     
           {stories.map ((story, index) => <Story key={index} img={story.img} userName={story.userName}/>)}

            <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
        )
};