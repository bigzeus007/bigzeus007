import TextareaAutosize from "react-textarea-autosize";

function Experiences({addExperience,setAddExperience}) {

    function removeMyExperience(index) {
        let myNewList = addExperience;
        myNewList.splice(index,1,{titre:"invisible", contenu:""});
        setAddExperience([...myNewList]);
    }
    return(
        <>
        <div className="experiences" >Experiences</div>
        <div id="maExperience" className="maExperience" >
            {addExperience.map((element,index)=>(
            <div key={element+index} className="uneExperience" visible={element.titre}>
                <label htmlFor="dateDebutE" className="dateDebutE">DE <input id="dateDebutE" type="date" style={{height:"30px",width:"130px",}}></input></label> 
                <label htmlFor="dateFinE" className="dateFinE">A <input id="dateFinE" type="date" style={{height:"30px",width:"130px",}}></input></label>
                <label htmlFor="mission" className="mission">Missions <TextareaAutosize id="mission" style={{fontSize:"14px",width:"730px"}} type="text" ></TextareaAutosize></label>
                <label htmlFor="fonction" className="fonction">Fonction <input id="fonction" style={{fontSize:"14px",width:"730px"}} type="text" ></input></label>
                <label htmlFor="entreprise" className="entreprise">Entreprise <input type="text" id="entreprise" style={{backgroundColor:"transparent",fontSize:"14px",width:"170px",}}></input></label>
                <label htmlFor="villeE" className="villeE">Ville <input type="text" id="villeE" style={{backgroundColor:"transparent",fontSize:"14px",width:"130px"}}></input></label>
                <button className="myDeleteButton" onClick={(event)=>{event.preventDefault();removeMyExperience(index);}}> X </button>

                </div>))}
        </div>
        
        </>
    );
}
export default Experiences;

