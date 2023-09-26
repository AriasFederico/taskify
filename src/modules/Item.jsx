export const Item = ( { valorNota, estadoNota, funcionTick, index, eliminarNota }) => {

  return (
    <div className={`tarea ${estadoNota ? 'terminado' : 'nota'}`}>
      <p>{valorNota}</p>

      <div className="estadoNota">
          <div 
          onClick={()=> funcionTick(index)} className="estado">√</div>
          <div 
          onClick={()=> eliminarNota(index)}
          className="eliminar-nota">x</div>
        </div>
    </div>
  )
}