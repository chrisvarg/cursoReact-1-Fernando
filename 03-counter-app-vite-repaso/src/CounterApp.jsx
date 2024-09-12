import PropTypes from "prop-types"
import { useState } from "react"

export const CounterApp = ( { value=4 } ) => {
  console.log("render");

  const [ counter, setCounter ] = useState( value );
  
  // para mostrar el nuevo estado, react
  // cambia primero el estado y luego renderiza
  const handleAdd = () => {
    // setCounter(counter + 1);
    setCounter( (c) => c +1 );
  }
  const handleSubtract = () => {
    // setCounter(counter + 1);
    setCounter( (c) => c - 1 );
  }
  const handleReset = () => {
    // setCounter(counter + 1);
    setCounter( value );
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={() => handleAdd(event, 'hola')}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}