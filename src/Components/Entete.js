import React, { useState} from 'react';




function Entete(){

    const [myPreview,setMyPreview]=useState('');

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
            <img src={myPreview} alt="myPhoto" />
            <img src="images/photo-profil.jpg" alt="myPhoto" style={{width:"100px"}}/>
        </div>
        
        
        </div>

    );
}
//setMyPhoto(e.target.files[0]);console.log(e.target.files[0])
export default Entete;