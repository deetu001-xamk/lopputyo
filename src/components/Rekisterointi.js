import { Button, Container, TextField } from "@mui/material";
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

export default function Rekisterointi(props) {

    const [nimi, setNimi] = useState();

    const [pass, setPass] = useState("");

    const [pass2, setPass2] = useState("");

    const [errorMsg, setError] = useState({});

    const uusiObj = {
        nimi: nimi,
        pass: pass

    }

    let nav = useNavigate();

    const luoTunnus = () => {

        let error = {};
        
        
        if(pass === pass2 && pass.length > 3) {

            if(props.kayttajat === null) {

                props.setKayttaja([uusiObj])

            } else {
                props.setKayttaja([...props.kayttajat, uusiObj])
            }
            
            

            console.log(uusiObj)

            

            nav("/")
                
        } 



        if(pass !== pass2) {
            error = {...error, pass: "Salasanat eivät täsmää!"}
        } 
        
        if(pass === pass2 && pass.length < 4){
            error = {...error, pass: "Salasanan pitää olla vähintään 4 merkkiä!"}
        }

        
            


        


        console.log(error)


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
                        type="password"
                        error={Boolean(errorMsg.pass)}
                        helperText={errorMsg.pass}
                        onChange={(e) => {setPass(e.target.value)}}>
                
            </TextField>
            <br/><br/>
            <TextField  
                        label="Toista salasana"
                        type="password"
                        error={Boolean(errorMsg.pass)}
                        helperText={errorMsg.pass}
                        onChange={(e) => {setPass2(e.target.value)}}>
                
            </TextField>
            <br/><br/>
            <Button style={style.button} onClick={luoTunnus}>
                Luo tunnus

            </Button>

            <Button  style={style.button} LinkComponent={Link} to="/">
                peruuta

            </Button>


        </Container>
        

    )


}