import Story from "./Story";

const stories = [
    {
      img:"./assets/img/kawhistorie.jpg", 
      userName:"kawhi"
    }, 
    {
      img:"./assets/img/lebronstorie.jpg", 
      userName:"lebron"
    }, 
    {
      img:"./assets/img/durantstorie.jpg", 
      userName:"durant"
    }, 
    {
      img:"./assets/img/currystorie.jpeg", 
      userName:"curry"
    }, 
    {
      img:"./assets/img/lillardstorie.jpg", 
      userName:"lillard"
    }, 
    {
      img:"./assets/img/mitchelstorie.jpg", 
      userName:"donavan"
    }, 
    {
      img:"../assets/img/jokicstorie.jpg", 
      userName:"filomoderna"
    }, 
    {
      img:"./assets/img/doncicstorie.jpg", 
      userName:"luka doncic"
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