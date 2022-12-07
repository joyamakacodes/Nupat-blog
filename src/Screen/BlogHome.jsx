import Post from "../Components/Posts/posts";
import postData from "../Components/Posts/postData";
const BlogHome =()=>{
   
    return(
        <div className="home">
            <Post blogs={postData}></Post>
           
        </div>
    )
}
export default BlogHome;