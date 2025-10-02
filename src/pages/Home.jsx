import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    // People
    fetch("https://www.swapi.tech/api/people")
      .then(res => res.json())
      .then(data => dispatch({ type: "set_people", payload: data.results }))
      .catch(err => console.error(err));

    // Planets
    fetch("https://www.swapi.tech/api/planets")
      .then(res => res.json())
      .then(data => dispatch({ type: "set_planets", payload: data.results }))
      .catch(err => console.error(err));

    // Vehicles
    fetch("https://www.swapi.tech/api/vehicles")
      .then(res => res.json())
      .then(data => dispatch({ type: "set_vehicles", payload: data.results }))
      .catch(err => console.error(err));
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Star Wars Blog</h1>

      {/* Characters */}
      <div className="mt-4">
        <h2>Characters</h2>
        <div className="d-flex flex-row overflow-auto">
          {store.people.map((person) => (
            <div key={person.uid} className="card m-2" style={{ minWidth: "18rem" }}>
              <img
                src={new URL(`../assets/img/people/${person.uid}.jpg`, import.meta.url).href}
                onError={(e) =>
                  (e.target.src = new URL("../assets/img/people/placeholder-people.jpg", import.meta.url).href)
                }
                className="card-img-top"
                alt={person.name}
              />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <Link to={`/people/${person.uid}`} className="btn btn-primary me-2">
                  Learn more
                </Link>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => dispatch({ type: "add_favorite", payload: person.name })}
                >
                  ❤️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Planets */}
      <div className="mt-4">
        <h2>Planets</h2>
        <div className="d-flex flex-row overflow-auto">
          {store.planets.map((planet) => (
            <div key={planet.uid} className="card m-2" style={{ minWidth: "18rem" }}>
              <img
                src={new URL(`../assets/img/planets/${planet.uid}.jpg`, import.meta.url).href}
                onError={(e) =>
                  (e.target.src = new URL("../assets/img/planets/placeholder-planets.jpg", import.meta.url).href)
                }
                className="card-img-top"
                alt={planet.name}
              />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <Link to={`/planets/${planet.uid}`} className="btn btn-primary me-2">
                  Learn more
                </Link>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => dispatch({ type: "add_favorite", payload: planet.name })}
                >
                  ❤️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicles */}
      <div className="mt-4">
        <h2>Vehicles</h2>
        <div className="d-flex flex-row overflow-auto">
          {store.vehicles.map((vehicle) => (
            <div key={vehicle.uid} className="card m-2" style={{ minWidth: "18rem" }}>
              <img
                src={new URL(`../assets/img/vehicles/${vehicle.uid}.jpg`, import.meta.url).href}
                onError={(e) =>
                  (e.target.src = new URL("../assets/img/vehicles/placeholder-vehicles.jpg", import.meta.url).href)
                }
                className="card-img-top"
                alt={vehicle.name}
              />
              <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-primary me-2">
                  Learn more
                </Link>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => dispatch({ type: "add_favorite", payload: vehicle.name })}
                >
                  ❤️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
