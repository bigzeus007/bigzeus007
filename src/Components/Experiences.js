import TextareaAutosize from "react-textarea-autosize";

function Experiences({addExperience}) {
    return(
        <>
        <div className="experiences">Experiences</div>
        <div id="maExperience" className="maExperience" >
            {addExperience.map((element)=>(
            <div key={element.index} className="uneExperience" >
                <label htmlFor="dateDebutE" className="dateDebutE">DE  <input id="dateDebutE" type="date" style={{height:"30px"}}></input></label> 
                <label htmlFor="dateFinE" className="dateFinE">A <input id="dateFinE" type="date" style={{height:"30px"}}></input></label>
                <label htmlFor="mission" className="mission" style={{}}>Missions <TextareaAutosize id="mission" style={{fontSize:"14px",width:"750px"}} type="text" ></TextareaAutosize></label>
                <label htmlFor="fonction" className="fonction">Fonction <input id="fonction" style={{fontSize:"14px",width:"500px"}} type="text" ></input></label>
                <label htmlFor="entreprise" className="entreprise">Entreprise <input type="text" id="entreprise" style={{backgroundColor:"transparent",color:"blue",fontSize:"14px"}}></input></label>
                <label htmlFor="villeE" className="villeE">Ville <input type="text" id="villeE" style={{backgroundColor:"transparent",color:"blue",fontSize:"14px"}}></input></label>

                </div>))}
        </div>
        
        </>
    );
}
export default Experiences;

