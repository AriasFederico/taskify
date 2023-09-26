import { useState } from "react";

export const InputTarea = ( { convertirValor } ) => {

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
      className="input"
      placeholder="Ingresar tarea"
      />
    </form>
  )
}