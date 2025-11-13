import React, { useState } from 'react'
import DrinksValues from './DrinksValues.jsx'

const DrinksCounter = () => {
  const [drinks, setDrinks] = useState({ beer: 0, wisky: 0, vine: 0 })

  const handleLogDrink = (drinkName) => {
if(drinks[drinkName] === 7 && drinkName === 'beer') {
    alert('Больше нет пива')
    return
}
    setDrinks({...drinks,[drinkName]: drinks[drinkName] + 1,})
  }

  const reset = () => {
   setDrinks({ beer: 0, wisky: 0, vine: 0 })
  }

  const totalCount = drinks.beer + drinks.wisky + drinks.vine

  return (
    <div>
      <DrinksValues drinks={drinks} totalCount={totalCount} />
      <button onClick={() => handleLogDrink('beer')}>Beer 🍺</button>
      <button onClick={() => handleLogDrink('wisky')}>Wisky 🥃</button>
      <button onClick={() => handleLogDrink('vine')}>Vine 🍷</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default DrinksCounter
