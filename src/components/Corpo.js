import Posts from "./Posts.js";
import Sidebar from "./SideBar.js";
import Stories from "./Stories.js";

export default function Corpo (){
    return(
      <div className="corpo">
      <div className="esquerda">
        <Stories/>
        <Posts/>
      </div>
        <Sidebar/>
     </div>
    )
};