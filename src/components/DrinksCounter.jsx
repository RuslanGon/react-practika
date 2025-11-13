import React, { useState } from 'react'
import DrinksValues from './DrinksValues.jsx'

const DrinksCounter = () => {

const initialDrinks = {beer:3, wisky:5, vine:1}     

const handleLogDrink = (drinkName) => {
    console.log(drinkName);
}    

const [counter, setCounter] = useState(0)

const increment = () => {
setCounter(counter + 1)

}

const decrement = () => {
    if(counter === 0) return
    setCounter(counter - 1)
    }
 

  return (
    <div>
        <button onClick={increment}>counter: {counter}</button>
        <button onClick={decrement}>-</button>

         <DrinksValues drinks={initialDrinks} />
        <button onClick={() => handleLogDrink('Beer')}>Beer 🍺</button>
        <button onClick={() => handleLogDrink('Wisky')}>Wisky 🥃</button>
        <button onClick={() => handleLogDrink('Vine')}>Vine 🍷</button>
    </div>
  )
}

export default DrinksCounter