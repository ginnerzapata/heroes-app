import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Navbar } from '../components/ui/Navbar'
import { MarvelScreen } from './../components/marvel/MarvelScreen'
import { HeroScreen } from './../components/heroes/HeroScreen'
import { DcScreen } from './../components/dc/DcScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exac path="/marvel" component={MarvelScreen} />
          <Route exac path="/heroe/:heroeId" component={HeroScreen} />
          <Route exac path="/dc" component={DcScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}
