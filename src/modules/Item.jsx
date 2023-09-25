export const Item = ( { valorNota, estadoNota, funcionTick, index }) => {

  return (
    <div className={`tarea ${estadoNota ? 'terminado' : 'nota'}`}>
      <p>{valorNota}</p>

      <div className="estadoNota">
          <div onClick={()=> funcionTick(index)} className="estado"><p>√</p></div>
        </div>
    </div>
  )
}