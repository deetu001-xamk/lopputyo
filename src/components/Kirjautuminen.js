import { Button, Container, TextField } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const style = {

    box: {
        backgroundColor: "#ffd82b",
        width: "fit-content",
        textAlign: "center",
        padding: "25px",
        borderRadius: "8px",
        margin: "25vh auto 0 auto"
    },

    button: {
        
        margin: "5px",
        color: "black"
    },






}


export default function Kirjautuminen(props) {

    const [nimi, setNimi] = useState();

    const [pass, setPass] = useState();

    const [errorMsg, setError] = useState({});

    let nav = useNavigate();

    const tarkista = () => {

        let error = {};
        props.kayttajat.map((obj, idx) => {
            
            if(String(obj.nimi) === String(nimi) && String(obj.pass) === String(pass)) {
                props.setNyt(nimi);
                nav("/muistio");
                
            } else {
                error = {...error, nimi: "Tarkista käyttäjänimi ja salasana!"};
            }
            


        })


      


        if(Object.entries(error).length > 0) {
            setError({...error});
        }
        

        
        
    }




    return (

        <Container style={style.box}>

            <TextField  
                        label="Käyttäjänimi"
                        error={Boolean(errorMsg.nimi)}
                        helperText={errorMsg.nimi}
                        onChange={(e) => {setNimi(e.target.value)}}>

            </TextField>
            <br/><br/>
            <TextField  
                        label="Salasana"
                        error={Boolean(errorMsg.nimi)}
                        helperText={errorMsg.nimi}
                        onChange={(e) => {setPass(e.target.value)}}>
                
            </TextField>
            <br/><br/>
            <Button style={style.button} onClick={tarkista}>
                Kirjaudu

            </Button>

            <Button style={style.button} LinkComponent={Link} to="/rekisteroidy">
                Rekisteröidy

            </Button>


        </Container>
        

    )


}