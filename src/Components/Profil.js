import TextareaAutosize from "react-textarea-autosize";
function Profil({profil}) {
    return(
        <div className="profil" style={{display:profil}}><label htmlFor="profil" style={{display:"block"}}>Profil</label><TextareaAutosize id="profil" style={{display:"block",width:"100%",backgroundColor:"transparent",borderColor:"yellowgreen",fontSize:"14px"}}/></div>
    );
}
export default Profil;