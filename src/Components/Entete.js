import React, { useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';


function Entete(){

    const [myPreview,setMyPreview]=useState(null)

    return(
        <div className="Entete">
        <div>
            <input id="image" type="file" className="image" onChange={(e)=>{
                let reader = new FileReader();
                reader.onload = function(e) {
                    setMyPreview(reader.result);
                    
                }
                reader.readAsDataURL(e.target.files[0]);
                
            }}/>
            <img src={myPreview} alt="" />
        </div>
        <TextareaAutosize maxRows="5" className="titreCV" style={{backgroundColor:"transparent"}} defaultValue="Titre"></TextareaAutosize>
        
        </div>

    );
}
//setMyPhoto(e.target.files[0]);console.log(e.target.files[0])
export default Entete;