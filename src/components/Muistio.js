import { Button, Container, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { color, width } from "@mui/system";
import { Link } from "react-router-dom";


    const style ={
        grid :{
            backgroundColor: "#ffd82b",
            textAlign: "center",
            borderRadius: "6px",
            margin: "13px",
            padding: "px"
            
        },

        otsikko: {
            fontSize: "150%",
            marginBottom: "5px"
        },

        sisalto: {
            wordWrap: "break-word",
            padding: "4px",

            
        },
        box: {
            
            width: "75%",
            margin: "auto",
            top: "0",
            position: "absolute",
            left: "0"
        },
        syotto: {
            right: "10px",
            position: "absolute",
            top: "30px",
            width: "20%",
            textAlign: "center"
        },
        button: {
            backgroundColor: "#ffd82b",
            color: "black",
            width: "80%",
            padding: "10px"
        }







    }



export default function Muistio(props) {


    

    const [muistiOtsikko, setMuistioOtsikko] = useState("");

    const [muistiSisalto, setMuistioSisalto] = useState("");


    const uusiMuistio = () => {

        let array = [muistiOtsikko,muistiSisalto];

        if(props.muistiot === null) {
            props.setMuistiot([array])
        } else {
            props.setMuistiot([...props.muistiot, array]);
        }

        
        



    }


 
    useEffect(() => {

        props.lataa();

    },[])



    


    return (

        <Grid container>
            
            <Grid style={style.syotto} item xs={12}>
                <TextField
                    onChange={(e) => {setMuistioOtsikko(e.target.value)}}
                    label="Otsikko"

                
                >

                </TextField>
                <br/><br/>

                <TextField
                    onChange={(e) => {setMuistioSisalto(e.target.value)}}
                    multiline
                    label="Sisältö"
                    rows={5}
                
                >

                </TextField>
                <br/><br/>
                <Button style={style.button} onClick={uusiMuistio}>
                    Lisää
                </Button>
                <br/><br/>
                <Button style={style.button}  component={Link} to="/">
                    Kirjaudu ulos
                </Button>
                
            </Grid>
            
            <Grid style={style.box} container>

                {(props.muistiot === null)
                ?<p>Kun luot ensimmäisen muistiosi se ilmestyy tähän.</p>
                
                
                :props.muistiot.map((obj, idx) => {
                    
                    return(
                    
                    <Grid style={style.grid} key={idx} item xs={4} md={2}>

                        <Typography style={style.otsikko}>
                            {obj[0]}
                        </Typography>


                        <Typography style={style.sisalto}>
                            {obj[1]}
                                
                        </Typography>

                        <IconButton onClick={(e) => {
                            let lista = props.muistiot.filter((obj2, idx2) => {

                                return(idx2 !== idx);
                            })
                            console.log(lista)
                            props.setMuistiot([...lista])


                        }}   >
                            <CancelPresentationIcon/>
                        </IconButton>



                    </Grid>


                    )       
                })
                
                
                }







            </Grid>

        </Grid>

    );


}