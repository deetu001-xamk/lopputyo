import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Kirjautuminen from "./components/Kirjautuminen";
import Muistio from "./components/Muistio";
import Rekisterointi from "./components/Rekisterointi";



function App() {

  const [nyt, setNyt] = useState("");

  const [kayttajat, setKayttaja ] = useState([{nimi: "hei"}]);

  const [muistiot, setMuistiot] = useState([["Esimerkki Otsikko", "Sisältö"]]);

    const tallenna = () => {


        localStorage.setItem("kayttajat", JSON.stringify(kayttajat));

        localStorage.setItem(`muistiot/${nyt}`, JSON.stringify(muistiot));

      

    }


    const lataa = () => {

      setKayttaja(JSON.parse(localStorage.getItem("kayttajat")));

      setMuistiot(JSON.parse(localStorage.getItem(`muistiot/${nyt}`)));



    }






    useEffect(() => {

        lataa();

    },[])


    useEffect(() => {
        
      tallenna();
 
    }, [kayttajat])

    useEffect(() => {
    
    tallenna();

    }, [muistiot])



  return (
    
      
      <Routes>

        <Route path="/" element={<Kirjautuminen lataa={lataa} setNyt={setNyt} kayttajat={kayttajat} setKayttaja={setKayttaja}/>}/>

        <Route path="/muistio" element={<Muistio lataa={lataa} setMuistiot={setMuistiot} muistiot={muistiot} nyt={nyt} kayttajat={kayttajat}/>}/>

        <Route path="/rekisteroidy" element={<Rekisterointi kayttajat={kayttajat} setKayttaja={setKayttaja} tallenna={tallenna}/>}/>


      </Routes>
      
      


      
    
  );
}

export default App;
