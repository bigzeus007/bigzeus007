import {ImCheckboxChecked} from 'react-icons/im';

function Qualites({addQualites,setAddQualites}) {

    function removeMyQualites(index) {
        let myNewList = addQualites;
        myNewList.splice(index,1,{visible:"invisible"});
        setAddQualites([...myNewList]);
    }

    return(
        <>
            <div className="qualitesD">Qualités</div>
            <div id="myQualites" className="myQualite" >

                {addQualites.map((element,index)=>(

                <div key={element+" "+index} name="ChoixQualites" className={element.visible}>
                        <ImCheckboxChecked></ImCheckboxChecked>
                        <input type="text" style={{color:"red",width:"200px",height:"20px",}}></input>
                        <button style={{color:"red",width:"65px",height:"20px",}} onClick={(event)=>{event.preventDefault();removeMyQualites(index);}} > Retirer </button>
                    
                    
                    
                    
                </div>))}
            </div>
        </>
    
    );
    
}
export default Qualites;