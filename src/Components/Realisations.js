import TextareaAutosize from "react-textarea-autosize";
function Realisations({realisation}) {
    return(
        <div style={{display:realisation}}><label htmlFor="realisation" className="realisations"  style={{display:"block"}}>Realisations</label><TextareaAutosize id="realisation" style={{display:"block",width:"100%",backgroundColor:"transparent",borderColor:"yellowgreen",fontSize:"14px"}}/></div>
    );
}
export default Realisations;