import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const People = () => {
  const { uid } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${uid}`)
      .then(res => res.json())
      .then(data => setPerson(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);

  if (!person) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Imagen */}
        <div className="col-md-4">
          <img
            src={new URL(`../assets/img/people/${uid}.jpg`, import.meta.url).href}
            onError={(e) =>
              (e.target.src = new URL("../assets/img/people/placeholder-people.jpg", import.meta.url).href)
            }
            alt={person.name}
            className="img-fluid rounded"
          />
        </div>

        {/* Detalles */}
        <div className="col-md-8">
          <h1>{person.name}</h1>
          <ul className="list-group">
            <li className="list-group-item">Gender: {person.gender}</li>
            <li className="list-group-item">Height: {person.height}</li>
            <li className="list-group-item">Hair color: {person.hair_color}</li>
            <li className="list-group-item">Eye color: {person.eye_color}</li>
            <li className="list-group-item">Birth year: {person.birth_year}</li>
          </ul>

          <Link to="/" className="btn btn-primary mt-3">Back home</Link>
        </div>
      </div>
    </div>
  );
};

export default People;
