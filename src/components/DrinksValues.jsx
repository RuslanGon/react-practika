import React from 'react'

const DrinksValues = ({drinks}) => {
  return (
<ul>
    <li>Beer: {drinks.beer}</li>
    <li>Wisky: {drinks.wisky}</li>
    <li>Vine: {drinks.vine}</li>
</ul>
  )
}

export default DrinksValues