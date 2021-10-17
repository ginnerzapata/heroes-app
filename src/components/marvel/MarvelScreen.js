import React from 'react'
import { HeroList } from '../heroes/HeroeList'

export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel Screen</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  )
}
