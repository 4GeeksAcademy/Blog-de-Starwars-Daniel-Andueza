import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Vehicles = () => {
  const { uid } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
      .then(res => res.json())
      .then(data => setVehicle(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);

  if (!vehicle) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Imagen */}
        <div className="col-md-4">
          <img
            src={new URL(`../assets/img/vehicles/${uid}.jpg`, import.meta.url).href}
            onError={(e) =>
              (e.target.src = new URL("../assets/img/vehicles/placeholder-vehicles.jpg", import.meta.url).href)
            }
            alt={vehicle.name}
            className="img-fluid rounded"
          />
        </div>

        {/* Detalles */}
        <div className="col-md-8">
          <h1>{vehicle.name}</h1>
          <ul className="list-group">
            <li className="list-group-item">Model: {vehicle.model}</li>
            <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
            <li className="list-group-item">Cost: {vehicle.cost_in_credits}</li>
            <li className="list-group-item">Crew: {vehicle.crew}</li>
            <li className="list-group-item">Passengers: {vehicle.passengers}</li>
          </ul>

          <Link to="/" className="btn btn-primary mt-3">Back home</Link>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
