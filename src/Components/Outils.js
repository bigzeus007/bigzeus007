import React, {useState} from 'react';
import printJS from 'print-js';



function Outils({addFormation, setAddFormation,profil,setProfil,addExperience,setAddExperience,realisation,setRealisation,addLanguage,setAddLanguage,addCentresInteret,addQualites,setAddQualites,setAddCentresInteret}) {
    
    const [monProfil,setMonProfil]=useState("Masquer Profil" );
    const [mesRealisations,setMesRealisations]=useState("Masquer Realisations");
    
   

    return(
        <div className="listeOutils" id="listOutils">
            

            <button id="profil" onClick={()=>{
                setProfil(profil==='' ? "none" : "");
                setMonProfil(monProfil==="Masquer Profil" ? "Ajouter Profil" : "Masquer Profil");
                
                }}
                 className="Outil" >{monProfil}</button>

            
            <button id="addFormation" onClick={()=>{
                setAddFormation([...addFormation,{titre:"visible", contenu:""}]);
                
                }}
                 className="Outil" >Ajouter Formation</button>
            <button id="addExp" onClick={()=>{
                setAddExperience([...addExperience,{titre:"visible", contenu:""}]);
                
                }}
                 className="Outil" >Ajouter Experience</button>

            <button id="realisation" onClick={()=>{
                setRealisation(realisation==='' ? "none" : "");
                setMesRealisations(mesRealisations==="Ajouter Realisations" ? "Masquer Realisations" : "Ajouter Realisations");
                
                }}
                className="Outil" >{mesRealisations}</button>
            <button id="langue" onClick={()=>{setAddLanguage([...addLanguage,{visible:"visible"}])}}
                className="Outil" >Ajouter Langue</button>

            
            <button id="qualites" onClick={()=>{setAddQualites([...addQualites,{visible:"visible"}])}}
                className="Outil" >Ajouter Qualité</button>

            <button id="centresInteret" onClick={()=>{setAddCentresInteret([...addCentresInteret,{visible:"visible"}])}}
                className="Outil" >Ajouter Centre d'intérêt</button>
            <button id="print" className="Outil" type="button" onClick={()=>printJS( {printable:'monCV',type:'html',targetStyles:['*'],}) } >
                Imprimer CV
            </button>

        </div>
    );
}
export default Outils;