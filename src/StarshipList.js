import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StarshipList() {
  const [starships, setStarships] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStarships("https://swapi.dev/api/starships/");
  }, []);

  const loadStarships = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStarships((prevStarships) => [...prevStarships, ...data.results]);
        setNextUrl(data.next);
      });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filteredStarships = starships.filter(
    (starship) =>
      starship.name.toLowerCase().includes(search) ||
      starship.model.toLowerCase().includes(search)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Ad veya modele göre ara..."
        onChange={handleSearch}
      />
      <div>
        {filteredStarships.map((starship) => (
          <div key={starship.name} className="starship">
            <h2>{starship.name}</h2>
            <p>Model: {starship.model}</p>
            <p>Maksimum Hız: {starship.max_atmosphering_speed}</p>
            <Link to={`/starship/${getStarshipId(starship.url)}`}>
              Detayları Gör
            </Link>
          </div>
        ))}
      </div>
      {nextUrl && (
        <button onClick={() => loadStarships(nextUrl)}>Daha Fazla</button>
      )}
    </div>
  );
}

const getStarshipId = (url) => {
  return url.match(/\/([0-9]+)\/$/)[1];
};

export default StarshipList;
