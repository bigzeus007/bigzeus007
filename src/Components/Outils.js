import React from 'react';
import printJS from 'print-js';

import '../App.css';

function Outils({addFormation, setAddFormation,profil,setProfil,addExperience,setAddExperience,realisation,setRealisation,addLanguage,setAddLanguage,addCentresInteret,addQualites,setAddQualites,setAddCentresInteret}) {
    let a=addFormation.length
   

    return(
        <div className="listeOutils" id="listOutils">
            <div> Boite a outils</div>

            <button id="profil" onClick={()=>{
                setProfil(profil==='' ? "none" : "");
                
                }}
                 className="Outil" style={{display:"block",height:"40px"}}>Ajouter Profil</button>

            
            <button id="addFormation" onClick={()=>{
                setAddFormation([...addFormation,{index:a ,titre:"", contenu:""}]);
                
                }}
                 className="Outil" style={{display:"block",height:"40px"}}>Ajouter Formation</button>
            <button id="addExp" onClick={()=>{
                setAddExperience([...addExperience,{index:a ,titre:"", contenu:""}]);
                
                }}
                 className="Outil" style={{display:"block",height:"40px"}}>Ajouter Experience</button>

            <button id="realisation" onClick={()=>{
                setRealisation(realisation==='' ? "none" : "");
                
                }}
                className="Outil" style={{display:"block",height:"40px"}}>Ajouter Realisation</button>
            <button id="langue" onClick={()=>{setAddLanguage([...addLanguage,{visible:"visible"}])}}
                className="Outil" style={{display:"block",height:"40px"}}>Ajouter Langue</button>

            
            <button id="qualites" onClick={()=>{setAddQualites([...addQualites,{visible:"visible"}])}}
                className="Outil" style={{display:"block",height:"40px"}}>Ajouter Qualité</button>

            <button id="centresInteret" onClick={()=>{setAddCentresInteret([...addCentresInteret,{visible:"visible"}])}}
                className="Outil" style={{display:"block",height:"40px"}}>Ajouter Centre d'intérêt</button>
            <button id="print" className="Outil" type="button" onClick={()=>printJS( {printable:'monCV',type:'html',targetStyles:['*'],maxWidth:"900px",ignoreElements:['Outils']}) } >
                Print Form
            </button>

        </div>
    );
}
export default Outils;