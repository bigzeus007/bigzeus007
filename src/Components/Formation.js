function Formation({addFormation,setAddFormation}) {

    function removeMyFormation(index) {
        let myNewList = addFormation;
        myNewList.splice(index,1,{titre:"invisible", contenu:""});
        setAddFormation([...myNewList]);
    }

    return(
        <>
        <div className="formation">Formation</div>
        <div id="myFormation" className="myFormation" >
            {addFormation.map((element,index)=>(
            <div key={element+index} className="uneFormation" visible={element.titre} >
                <label htmlFor="dateDebut" className="dateDebut">DE <input id="dateDebut" type="date" style={{height:"30px"}}></input></label> 
                <label htmlFor="dateFin" className="dateFin">A <input id="dateFin" type="date" style={{height:"30px"}}></input></label>
                <label htmlFor="specialite" className="specialite">Specialite <input id="specialite" style={{fontSize:"14px",width:"300px"}} type="text" ></input></label>
                <label htmlFor="diplome" className="diplome">Diplome <input id="diplome" style={{fontSize:"14px",width:"230px"}} type="text" ></input></label>
                <label htmlFor="organisme" className="organisme">Organisme <input type="text" id="organisme" style={{backgroundColor:"transparent",fontSize:"14px"}}></input></label>
                <label htmlFor="ville" className="ville">Ville <input type="text" id="ville" style={{backgroundColor:"transparent",fontSize:"14px",width:"130px"}}></input></label>
                <button className="myDeleteButton" onClick={(event)=>{event.preventDefault();removeMyFormation(index);}}> X </button>
            </div>))}
        </div>
        </>
    );
}
export default Formation;