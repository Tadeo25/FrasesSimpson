import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button"
import Frase from './components/Frase';
import {useState, useEffect} from "react";
import Spinner from "./components/Spinner";
// import Titulo from "./components/Titulo";
// import Header from "./components/Header";

function App() {
  //creo el state
  const [personaje, setPersonaje] = useState({})
  const [cargando, setCargando] = useState(false)
  useEffect(()=>{
    //logica a ejecutar
    consultarApi()
  }, [])

  const consultarApi = async()=>{
    setCargando(true);
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const resultado = await respuesta.json();
    console.log(respuesta);
    console.log(resultado[0]);

    setTimeout(()=>{
      setPersonaje(resultado[0])
      setCargando(false);
    },2500);
    //guardar objeto dentro del state
  }
  //Operador terniario (condicion) ? (lo q quiero hacer si la condicion es true) : (lo q quiero hacer si es false)
     
      const mostrarComponente = (cargando === true) ? 
      (
      <Spinner />
      ) 
      : 
      (
      <Frase personaje={personaje}/>
      )

  return (
    <section className="container text-center my-5 p-5 d-flex flex-column">
      <article className="d-flex flex-column align-items-center">
      <img 
      src={process.env.PUBLIC_URL+ 'logo.png'}
      className="w-75"
      />
      <Button variant="outline-warning" className="mt-5 w-25" onClick={()=>consultarApi()}>Obtener Frase</Button>
      {
        mostrarComponente
      }
      </article>

      {/* <Header logo="https://i.pinimg.com/originals/b1/6b/84/b16b8448d63014810c2aefbc93b11e52.png" /> */}
      {/* <Titulo emoji="http://assets.stickpng.com/images/5a0c409d5a997e1c2cea116b.png" /> */}
    </section>
  );
}

export default App;
