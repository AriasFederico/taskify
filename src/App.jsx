import { useState } from 'react'
import './App.css'
import { AgregarTarea } from './modules/Input.jsx'
import { Item } from './modules/Item.jsx';
import { Tema } from './modules/Tema.jsx';

function App() {
  
  // crear variable que tenga la condicion, a esa variable la paso a los componentes incluyendo al App
  // a la variable pasarla como prop a los componentes

  const logo = <img src="./logo/logo-claro.png" alt="Mi Imagen" />;

  let valorCondicion = null;

  const [ theme, setTheme] = useState(valorCondicion);

  let tareas = [];
  const [ array, setArray ] = useState(tareas);

  const onAgregarTarea = (val) => {
    if(val < 1) return
    setArray([...array, val]);
    console.log(array)
  }

  const click = () => {
    // funcion que al hacer click haga...
    setTheme(theme === 1 ? null : 1);
    setIcono(icono === '🔘' ? '⚫' : '🔘') 
  }

  const sol = '🔘';
  const luna = '⚫';

  const [ icono, setIcono ] = useState(luna)

  return (
    <div className={`App ${theme ? 'app-oscuro-theme' : ''}`}>
      <div className={`usuario-tema`}>
        Notas de: ----
        <Tema click={click} estadoTema={theme} icono={icono}/>
      </div>
      <div className={`contenedor-lista`}>

        <AgregarTarea agregarTarea={onAgregarTarea} estadoTema={theme}/>

        <div className={`tjt`}>
          {array.map((item, index) => (
              <Item key={index} tarea={item} estadoTema={theme}/>
            ))}
          {/* item de boton */}
        </div>
      </div>
    </div>
  )
}

export default App
