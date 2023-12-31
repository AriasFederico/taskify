import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

// componentes
import { InputTarea } from './modules/Input'
import { Item } from './modules/Item'

// imagenes

function App() {

  const temas = {
    claro: '🔘',
    oscuro: '⚫'
  }

  const [tema, setTema] = useState(() => {
    const storedTema = localStorage.getItem('tema');
    return storedTema ? storedTema : temas.oscuro;
  });

  const cambiarTema = () => {
    setTema((temaActual) => (temaActual === temas.oscuro ? temas.claro : temas.oscuro)) 
    // if tema === oscuro -> setear un classname
  }

  useEffect(() => {
    // Guarda el estado actual del tema en el local storage cuando cambie.
    localStorage.setItem('tema', tema);
  }, [tema]);

  const convertirValor = (string) => {
    const notaObj = {
      nota: string.charAt().toUpperCase() +string.slice(1),
      terminado:false,
    }
    setArrayNotas([...arrayNotas, notaObj])
    console.log(notaObj)
    console.log(arrayNotas)
  }

  const [arrayNotas, setArrayNotas] = useState(() => {
    const storedNotes = localStorage.getItem('notas');
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const eliminarNota = (index) => {
    const updatedArrayNotas = arrayNotas.filter((_, i) => i !== index);
    setArrayNotas(updatedArrayNotas);
  }

  const onClick = (index) => {
    // Clonar el array de notas y actualizar el estado 'terminado' de la tarea seleccionada
    const updatedArrayNotas = arrayNotas.map((nota, i) => {
      if (i === index) {
        return { ...nota, terminado: !nota.terminado};
      } else {
        return nota;
      }
    });
    setArrayNotas(updatedArrayNotas)
  }

  useEffect(() => {
    // Guarda el estado actual del arrayNotas en el local storage cuando cambie.
    localStorage.setItem('notas', JSON.stringify(arrayNotas));
  }, [arrayNotas]);

  return (
    <div className={`App ${tema === '🔘' ? 'app-oscuro' : ''}`} >
      <header className='header'>
        <div className='contenedor-logo-titulo'>
          <div className={`logo ${tema === '🔘' ? 'logo-oscuro' : ''}`}></div>
          <h1>Taskify</h1>
        </div>
        <div className={`contenedor-tema ${tema === '🔘' ? 'contenedor-tema-oscuro' : ''}`}
        onClick={cambiarTema}>
          <p>{tema}</p>
        </div>
      </header>

      <div className="contenedor-lista">
        <InputTarea convertirValor={convertirValor} estadoTema={tema}/>

        <div className='bloque-tarea'>
          {
            arrayNotas.map( (nota, index) => 
            <Item 
            key={index}
            valorNota={nota.nota}
            estadoNota={nota.terminado}
            eliminado={nota.eliminado}
            funcionTick={onClick}
            eliminarNota={eliminarNota}
            index={index}
            estadoTema={tema}
             />)
          }
        </div>
      </div>
    </div>
  )
}

export default App
