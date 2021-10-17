import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ hero }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={`./heroes/${hero.id}.jpg`}
              alt={hero.superhero}
              className="card-img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text">{hero.alter_ego}</p>
              {hero.alter_ego !== hero.characters && (
                <p className="card-text">{hero.characters}</p>
              )}
              <p className="card-text">
                <small className="text-muted">{hero.first_appearance}</small>
              </p>
              <Link to={`./hero/${hero.id}`}> Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
