import './App.css';
import Entete from './Components/Entete';
import Outils from './Components/Outils';
import Formation from './Components/Formation';
import Divers from './Components/Divers';
import Experiences from './Components/Experiences';
import Realisations from './Components/Realisations';
import Langues from './Components/Langues';
import Profil from './Components/Profil';
import React, { useState } from 'react';
import CentresInteret from './Components/CentresInteret';
import Qualites from './Components/Qualites';
import TextareaAutosize from 'react-textarea-autosize';

function App() {
  
  const [profil,setProfil]=useState("");
  const [addFormation,setAddFormation]=useState([{titre:"visible", contenu:""}]);
  const [addExperience,setAddExperience]=useState([{titre:"visible", contenu:""}]);
  const [realisation,setRealisation]=useState("");
  const [addLanguage,setAddLanguage]=useState([{visible:"invisible"}]);
  const [addQualites,setAddQualites]=useState([{visible:"invisible"}]);
  const [addCentresInteret,setAddCentresInteret]=useState([{visible:"invisible"}]);
  

  
  return (
      <div className="App">

      <div className="myTitreNav">CV CREATOR</div>
        
      <Outils addFormation={addFormation} setAddFormation={setAddFormation} profil={profil} setProfil={setProfil} 
      addExperience={addExperience} setAddExperience={setAddExperience} realisation={realisation} setRealisation={setRealisation} 
      addLanguage={addLanguage} setAddLanguage={setAddLanguage} addQualites={addQualites} setAddQualites={setAddQualites} addCentresInteret={addCentresInteret}
      setAddCentresInteret={setAddCentresInteret}
      />

      <form className="monCV" id="monCV">
         
        <div className="corpsCV" >
          <div className="leSecondaire">
            <Entete />
            <Divers  />
            <Langues addLanguage={addLanguage} setAddLanguage={setAddLanguage}/>
            <Qualites addQualites={addQualites} setAddQualites={setAddQualites}/>
            <CentresInteret addCentresInteret={addCentresInteret} setAddCentresInteret={setAddCentresInteret}/>
          </div>

          <div className="lePrioritaire">
            <TextareaAutosize maxRows="5" className="titreCV" style={{backgroundColor:"transparent"}} defaultValue="Titre"></TextareaAutosize>
            <Profil profil={profil} setProfil={setProfil}/>
            <Formation addFormation={addFormation} setAddFormation={setAddFormation}/>
            <Experiences addExperience={addExperience} setAddExperience={setAddExperience}/>
            <Realisations realisation={realisation} setRealisation={setRealisation} />
            
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;