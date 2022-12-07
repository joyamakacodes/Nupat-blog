import '../write/write.css';
import img from "../../Images/nupatinit4.jpg";
import postData from '../Posts/postData';
import {useState} from "react";
const Write =()=>{
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [postData, setPostData] = useState([]);
  
    const handleChangeTitle = event => {
      setTitle(event.target.value);
    };
    const handleChangeText = event => {
      setText(event.target.value);
    };
    const handleClick = event => {
        setPostData([...postData, { title: title, text: text }]);
    };
  
    console.log(postData);
    return(
        <div className="write">
            <img src={img} alt="banner" className='writeImg' />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className="writeIcon fa fa-plus"></i></label>
                    <input type="file" style={{display:"none"}} id="fileInput" accept="image/*,.pdf" />
                    <input type="text" className="writeInput" placeholder="Title" autoFocus={true} onChange={handleChangeTitle}/>
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" placeholder="Tell your story..." className="writeInput writeText" onChange={handleChangeText}></textarea>
                </div>
                <button className="writeButton" onClick={handleClick}>Publish</button>
            </form>
            <div>
                {postData.map((x, i)=>{
                    return(
                        <div key={i}>
                            {" "}
              {x.title} <p> {x.text} </p>{" "}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Write