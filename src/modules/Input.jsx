import { useState } from "react"

export const AgregarTarea = ( { agregarTarea, estadoTema }) => {
  
  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ( event ) => {
    setInputValue( event.target.value )
  }

  const onSubmit = (event) => {
    event.preventDefault();
    agregarTarea(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text"
      placeholder="Ingresar nueva tarea"
      value={inputValue}
      onChange={onInputChange} 
      className={`input ${estadoTema ? 'input-oscuro-theme' : ''}`} />
    </form>
  )
}