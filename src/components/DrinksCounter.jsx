import React from 'react'
import DrinksValues from './DrinksValues.jsx'

const DrinksCounter = () => {

const handleLogDrink = (drinkName) => {
    console.log(drinkName);
}    

  return (
    <div>
         <DrinksValues drinks={{beer:3, wisky:5, vine:1 }} />
        <button onClick={() => handleLogDrink('Beer')}>Beer 🍺</button>
        <button onClick={() => handleLogDrink('Wisky')}>Wisky 🥃</button>
        <button onClick={() => handleLogDrink('Vine')}>Vine 🍷</button>
    </div>
  )
}

export default DrinksCounter