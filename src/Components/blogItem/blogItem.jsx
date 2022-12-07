import { Link } from "react-router-dom"
const BlogItem =({blog:{
    id, Image, Contents, link, Type, Title, Read
}})=>{
    return(
        <div className="blogs">
        <div className="blogContainer">
        
        <img src={Image} alt="nupat" className="blogImage" />
       
       <h2 className="blogCaption">{Title}</h2>
       <div>
       <p className="blogContents">{Contents} </p>
      <Link to={`/blog1/${id}`} className="blogAnchor" key={id}>{Read}</Link> 
     
       </div>
         <a href={link} target="_blank"><i className={Type}></i></a>  
       </div>
    </div>
    )
}
export default BlogItem