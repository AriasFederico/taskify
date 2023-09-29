import { useState } from "react";

export const InputTarea = ( { convertirValor, estadoTema } ) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = ( event ) => {
    event.preventDefault()
    if (inputValue < 1) return
    convertirValor(inputValue);
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text"
      value={inputValue}
      onChange={onInputChange}
      placeholder="Ingresar tarea"
      className={`input ${estadoTema === '🔘' ? 'input-oscuro' : ''}`}
      />
    </form>
  )
}