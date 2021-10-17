import React from 'react'
import { HeroList } from '../heroes/HeroeList'

export const DcScreen = () => {
  return (
    <div>
      <h1>Dc Screen</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  )
}
