export const Item = ( { tarea, estadoTema } ) => {
  
  return (
    <>
      <div className={`tarea ${estadoTema ? 'tarea-tema-oscuro' : ''}`} draggable={true}>
        <p className="asd">{tarea}</p>
        <div className={`bloque-tarea ${estadoTema ? '' : 'item-oscuro'}`}>
          <p>✅</p>
          <p>⛔</p>
        </div>
      </div>
    </>
  )
}