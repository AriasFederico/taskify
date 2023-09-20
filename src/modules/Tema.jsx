export const Tema = ( { click, estadoTema, icono }) => {

  return (
    <div className={`contenedor-sol-luna ${estadoTema ? 'contenedor-tema-oscuro' : ''}`} onClick={click}>
      <div  className={`sol ${estadoTema ? 'luna' : ''}`}>
      {`${icono}`}
      </div>
    </div>
  )
}