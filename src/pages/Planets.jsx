import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Planets = () => {
  const { uid } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${uid}`)
      .then(res => res.json())
      .then(data => setPlanet(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);

  if (!planet) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Imagen */}
        <div className="col-md-4">
          <img
            src={new URL(`../assets/img/planets/${uid}.jpg`, import.meta.url).href}
            onError={(e) =>
              (e.target.src = new URL("../assets/img/planets/placeholder-planets.jpg", import.meta.url).href)
            }
            alt={planet.name}
            className="img-fluid rounded"
          />
        </div>

        {/* Detalles */}
        <div className="col-md-8">
          <h1>{planet.name}</h1>
          <ul className="list-group">
            <li className="list-group-item">Climate: {planet.climate}</li>
            <li className="list-group-item">Population: {planet.population}</li>
            <li className="list-group-item">Terrain: {planet.terrain}</li>
            <li className="list-group-item">Diameter: {planet.diameter}</li>
            <li className="list-group-item">Gravity: {planet.gravity}</li>
          </ul>

          <Link to="/" className="btn btn-primary mt-3">Back home</Link>
        </div>
      </div>
    </div>
  );
};

export default Planets;
