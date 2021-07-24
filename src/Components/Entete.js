import React, { useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';


function Entete(){

    const [myPreview,setMyPreview]=useState(null)

    return(
        <div className="Entete">
        <div className="coordonnees">
            <label htmlFor="nom"> Nom </label>
            <input type="text" id="nom"></input>
            <label htmlFor="prenom"> prenom </label>
            <input type="text" id="prenom"></input>
            <label htmlFor="tel"> tel </label>
            <input type="tel" id="tel"></input>
            <label htmlFor="adress"> adress </label>
            <input type="text" id="adress"></input>
            <label htmlFor="Ville"> ville </label>
            <input type="text" id="Ville"></input>
            <label htmlFor="pays"> pays </label>
            <input type="text" id="pays"></input>
            <label htmlFor="dateDeNaissance"> dateDeNaissance </label>
            <input type="date" id="dateDeNaissance"></input>
            <label htmlFor="email"> email </label>
            <input type="email" id="email"></input>
            


        </div>
        <TextareaAutosize maxRows="5" className="titreCV" defaultValue="Titre"></TextareaAutosize>
        <div>
            <input id="image" type="file" className="image" onChange={(e)=>{
                let reader = new FileReader();
                reader.onload = function(e) {
                    setMyPreview(reader.result);
                    
                }
                reader.readAsDataURL(e.target.files[0]);
                
            }}/>
            <img src={myPreview} alt="" style={{width:"200px",height:"200px"}}/>
        </div>
        </div>

    );
}
//setMyPhoto(e.target.files[0]);console.log(e.target.files[0])
export default Entete;