import TextareaAutosize from "react-textarea-autosize";
import '../App.css';
function Profil({profil}) {
    return(
    
            <div id="profil" style={{display:profil}} ><label htmlFor="profil" className="profil" style={{display:"block"}}>Profil</label><TextareaAutosize style={{width:"95%",marginLeft:"20px",}} /></div>
        
    );
}
export default Profil;