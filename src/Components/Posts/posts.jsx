import "./posts.css"
import { useState } from "react"

import BlogItem from "../blogItem/blogItem";
const Post = ({blogs})=>{
   
  
return (
<>
    
    {blogs.map((blog)=>{
        return(
           <div>
            <BlogItem blog={blog} key={blog.id}></BlogItem>
           </div>
        )    
    }     
    )}

    
</>
)

}
export default Post