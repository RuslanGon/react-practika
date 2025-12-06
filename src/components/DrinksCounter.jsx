import React, { useEffect, useState } from 'react'
import DrinksValues from './DrinksValues.jsx'

const initialValues = { beer: 0, wisky: 0, vine: 0 }

const DrinksCounter = () => {
const [drinks, setDrinks] = useState(() => {
 const stringiDrinks = localStorage.getItem('drinksValues')
 const parsetDrinks = JSON.parse(stringiDrinks) ?? initialValues
return parsetDrinks
})
const [isVisibleBar, setIsVisibleBar] = useState(false)

  const handleLogDrink = (drinkName) => {
// if(drinks[drinkName] === 7 && drinkName === 'beer') {
//     alert('Больше нет пива')
//     return
// }
    setDrinks({...drinks,[drinkName]: drinks[drinkName] + 1,})
  }

  const reset = () => {
   setDrinks({ beer: 0, wisky: 0, vine: 0 })
  }

  const totalCount = drinks.beer + drinks.wisky + drinks.vine

  const toggleBar = () => {
    setIsVisibleBar(!isVisibleBar)
  }

  useEffect(() => {
localStorage.setItem('drinksValues', JSON.stringify(drinks))
 }, [drinks])

  return (
    <div>
      <button onClick={toggleBar}>{isVisibleBar ? 'Close' : 'Show'} mini-bar</button>
    {isVisibleBar && (
      <>
        <DrinksValues drinks={drinks} totalCount={totalCount} />
        <button onClick={() => handleLogDrink('beer')}>Beer 🍺</button>
        <button onClick={() => handleLogDrink('wisky')}>Wisky 🥃</button>
        <button onClick={() => handleLogDrink('vine')}>Vine 🍷</button>
        {totalCount !== 0 &&  <button onClick={reset}>reset</button> }
      </>
    )}
  </div>
  )
}

export default DrinksCounter
