import React, { useRef, useState} from 'react';

import myLogo from "../images/photo-profil.jpg"



function Entete(){
    
    const photoClickRef = useRef();
    const [myPreview,setMyPreview]=useState(myLogo);
    

    return(
        <div className="Entete">
        <div>
            <input id="image" ref={photoClickRef} type="file" className="image" onChange={(e)=>{
                let reader = new FileReader();
                reader.onload = function(e) {
                    setMyPreview(reader.result);
                    
                }
                reader.readAsDataURL(e.target.files[0]);
                
            }}/>
            <button id="myButtonPhoto" onClick={(event)=>{event.preventDefault();photoClickRef.current.click();}} ></button>
            <img id="x" style={{zIndex:-1}} src={myPreview} alt="myPhoto" />
            
           
        </div>
        
        
        </div>

    );
}
//setMyPhoto(e.target.files[0]);console.log(e.target.files[0])
export default Entete;