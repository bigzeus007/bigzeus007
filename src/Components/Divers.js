function Divers(){
    return(
        <>
        <div className="divers">Détails personnels</div>
        <div className="coordonnees">
            <label htmlFor="nom"> Nom </label>
            <input type="text" id="nom"></input>
            <label htmlFor="prenom"> prenom </label>
            <input type="text" id="prenom"></input>
            <label htmlFor="tel"> tel </label>
            <input type="tel" id="tel"></input>
            <label htmlFor="adress"> adress </label>
            <input type="text" id="adress"></input>
            <label htmlFor="Ville"> ville </label>
            <input type="text" id="Ville"></input>
            <label htmlFor="pays"> pays </label>
            <input type="text" id="pays"></input>
            <label htmlFor="dateDeNaissance"> dateDeNaissance </label>
            <input type="date" id="dateDeNaissance"></input>
            <label htmlFor="email"> email </label>
            <input type="email" id="email"></input>
            


        </div>
        </>
    );
}

export default Divers;