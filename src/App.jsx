import { useState } from 'react'
import './App.css'

// componentes
import { InputTarea } from './modules/Input'
import { Item } from './modules/Item'

function App() {
  const convertirValor = (string) => {

    const notaObj = {
      nota: string.charAt().toUpperCase() +string.slice(1),
      terminado:false,
    }
    setArrayNotas([...arrayNotas, notaObj])
    console.log(notaObj)
    console.log(arrayNotas)
  }

  const notas = [];

  const [ arrayNotas, setArrayNotas ] = useState(notas);

  const onClick = (index) => {
    // Clonar el array de notas y actualizar el estado 'terminado' de la tarea seleccionada
    const updatedArrayNotas = arrayNotas.map((nota, i) => {
      if (i === index) {
        return { ...nota, terminado: !nota.terminado };
      } else {
        return nota;
      }
    });

    setArrayNotas(updatedArrayNotas);
  }

  return (
    <div className='App'>
      <div className="contenedor-lista">
        <InputTarea convertirValor={convertirValor}/>

        <div className="bloque-tarea">
          {
            arrayNotas.map( (nota, index) => 
            <Item 
            key={index}
            valorNota={nota.nota}
            estadoNota={nota.terminado}
            funcionTick={onClick}
            index={index}
            />)
          }
        </div>
      </div>
    </div>
  )
}

export default App
