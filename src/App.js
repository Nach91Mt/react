import './App.css';
import Mensaje1 from './Mensajes.js'

const Mensaje= () => {
  return <h1>Hola mundos Nuevo</h1>
}
const App= () => {
    const mensjae = 'Hola mundo'
    
  return (
    <div className="App">
      <Mensaje></Mensaje>
      <Mensaje1 color='Red' message='hola probando modulos'></Mensaje1>
      <Mensaje1 color='Blue' message='esto es un cambio de color'></Mensaje1>
      <br></br>
      {mensjae + ' evaluacion en JFX'}
    </div>
  );
}

export default App;
