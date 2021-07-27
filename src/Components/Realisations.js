import TextareaAutosize from "react-textarea-autosize";
function Realisations({realisation}) {
    return(
        <div style={{display:realisation}}><label htmlFor="realisation" className="realisations"  style={{display:"block"}}>Realisations</label><TextareaAutosize id="realisation" style={{display:"block",width:"90%",backgroundColor:"transparent",borderColor:"gray",fontSize:"14px",marginLeft:"5%",}}/></div>
    );
}
export default Realisations;