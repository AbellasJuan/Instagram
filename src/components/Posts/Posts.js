import Post from "./Post";

const posts =[
  {
    userImg: "assets/img/mitchelstorie.jpg",
    userName: "donavan",
    postImg: "assets/img/donavan.jpg",
    qtdLikes: "101.523",
    userLikedName: "lillard",
    userLikedImg: "assets/img/lillardstorie.jpg",
  },
  {
    userImg: "./assets/img/lebronstorie.jpg",
    userName: "lebron",
    postImg: "./assets/img/lebron.jpg",
    qtdLikes: "99.159",
    userLikedName: "curry",
    userLikedImg: "./assets/img/currystorie.jpeg",
  }
];

export default function Posts(){
    return(
        <div className="posts">
       {posts.map ((post, index) => (
       <Post 
             key={index}
             userImg={post.userImg}
             userName={post.userName}
             postImg={post.postImg}
             qtdLikes={post.qtdLikes}
             userLikedName={post.userLikedName}
             userLikedImg={post.userLikedImg} />))}
        
      </div>
    )
}