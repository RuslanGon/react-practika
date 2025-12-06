import React from 'react'

const DrinksValues = ({drinks, totalCount}) => {
  return (
<ul>
    <li>Beer: {drinks.beer}</li>
    <li>Wisky: {drinks.wisky}</li>
    <li>Vine: {drinks.vine}</li>
    <li>Всего выбрвно: <b>{totalCount}</b></li>
</ul>
  )
}

export default DrinksValues