function Langues({addLanguage,setAddLanguage}) {
    function removeMyLanguage(index) {
        let myNewList = addLanguage;
        myNewList.splice(index,1,{visible:"invisible"});
        setAddLanguage([...myNewList]);
    }

    return(
        <>
        <div className="langues">Language</div>
        <div id="myLanguages" className="myLanguages" >

            {addLanguage.map((element,index)=>(

            <div key={element+" "+index} name="ChoixDeLangue" className={element.visible}>
                <select name="maLangue" style={{width:"30%"}} >
                    <option value="Anglais">ANGLAIS</option>
                    <option value="FRANCAIS">FRANCAIS</option>
                    <option value="ESPAGNOL">ESPAGNOL</option>
                    <option value="ARABE">ARABE</option>
                    <option value="MANDARIN">MANDARIN</option>
                </select>
                
                <input type="radio" name="langue"></input>
                <input type="radio" name="langue"></input>
                <input type="radio" name="langue"></input>
                <input type="radio" name="langue"></input>
                <input type="radio" name="langue"></input>
                <button style={{color:"red",width:"20%",height:"20px"}} onClick={(event)=>{event.preventDefault();removeMyLanguage(index);}} > Retirer </button>
            </div>))}
        </div>
        </>
    );
}
export default Langues;