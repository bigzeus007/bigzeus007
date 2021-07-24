import {BiCheckShield} from "react-icons/bi";

function CentresInteret({addCentresInteret, setAddCentresInteret}){
    function removeMyCentresInteret(index) {
        let myNewList = addCentresInteret;
        myNewList.splice(index,1,{visible:"invisible"});
        setAddCentresInteret([...myNewList]);
    }

    return(
        <>
        <div className="centresInteretD">Centres d'intérêt</div>
        <div id="myCentresInteret" className="myCentresInteret" >

            {addCentresInteret.map((element,index)=>(

            <div key={element+" "+index} name="ChoixCentresInteret" className={element.visible}>
                    <BiCheckShield style={{height:"20px"}} id="ImCheckmark"></BiCheckShield>
                    <input type="text" style={{color:"red",width:"200px",height:"20px",}}></input>
                    <button style={{color:"red",width:"65px",height:"20px",}} onClick={(event)=>{event.preventDefault();removeMyCentresInteret(index);}} > Retirer </button>
                
                
                
                
            </div>))}
        </div>
    </>
    );
}
export default CentresInteret;