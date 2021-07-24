function Formation({addFormation}) {

    

    return(
        <>
        <div className="formation">Formation</div>
        <div id="myFormation" className="myFormation" >
            {addFormation.map((element)=>(
            <div key={element.index} className="uneFormation" >
                <label htmlFor="dateDebut" className="dateDebut">DE  <input id="dateDebut" type="date" style={{height:"30px"}}></input></label> 
                <label htmlFor="dateFin" className="dateFin">A <input id="dateFin" type="date" style={{height:"30px"}}></input></label>
                <label htmlFor="specialite" className="specialite">Specialite <input id="specialite" style={{fontSize:"14px",width:"350px"}} type="text" ></input></label>
                <label htmlFor="diplome" className="diplome">Diplome <input id="diplome" style={{fontSize:"14px",width:"350px"}} type="text" ></input></label>
                <label htmlFor="organisme" className="organisme">Organisme <input type="text" id="organisme" style={{backgroundColor:"transparent",color:"blue",fontSize:"14px"}}></input></label>
                <label htmlFor="ville" className="ville">Ville <input type="text" id="ville" style={{backgroundColor:"transparent",color:"blue",fontSize:"14px"}}></input></label>

            </div>))}
        </div>
        </>
    );
}
export default Formation;