import Posts from "./Posts/Posts.js";
import Sidebar from "./SideBar.js";
import Stories from "../components/Stories/Stories.js";

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