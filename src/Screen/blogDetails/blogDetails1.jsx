import { Link, useParams  } from "react-router-dom";
import postData from "../../Components/Posts/postData";
import close from "../../Images/close.svg"
import "../blogDetails/blogDetails.css";

import { useState, useEffect } from "react";

const Blog1 = ()=>{
    
    // const {Image, Title, Contents2} = props
    const {id} = useParams()
    const [blog, setBlog] = useState({})

    useEffect(()=>{
const render = postData.filter((post)=>post.id === parseInt(id))
// console.log(render)
setBlog(render[0])
    }, [])
    // const history = useHistory()
    
    console.log(blog)

    return (
        
        <>
        
        <Link to="/" className="blogDetailsImage"><img src={close} alt="" style={{float: "right"}}/></Link>
        <div className="blogDetails">
        <img src={blog.Image} className="blogDetailsImg"/>
            <h1 className= "blogDetailsHeading">{blog.Title}</h1>
            <p className="blogDetailsPara">{blog.Contents}</p>
        {/* <div><h1>hellommmm</h1>
        {postData.map((post)=>{
            return(
                <div key={post.id}>
                    
                    <img src={post.Image} alt="children" key={post.id} />
            <h1 className="BlogDetailsCap" key={post.id}>{post.Title}</h1>
            <p key={post.id}>{post.Contents}</p>
                </div>
            )

        })} */}
        

       
        {/* <img src={Image} alt="children" />
        <h1 className="BlogDetailsCap">A call for Charitable Hands</h1>
        <p className="BlogDetailsDesc">One of Our favorite quotes is “services to humanity is the best work of life” which is why we are calling out to you, yes you, to touch a life today.To mark Nigeria’s Independence Day 2022; we all at Nupat Initiatives are reaching out to you to help reach our goal and make tech accessible to those who need it but can’t get it. We believe in the key word “UBUNTU” - I am because we are and because we are one we can all be free. Let’s make an impact and celebrate Freedom United! Happy Independence! 🇳🇬 #NGO #UN #SERVICE #CHARITY #independence #</p>
        <p className="BlogDetailsDate">22/09/2022</p> */}

        {/* </div> */}
         </div>
        </>
    )
}
export default Blog1