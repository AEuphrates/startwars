import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function StarshipDetail() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${id}/`)
      .then((response) => response.json())
      .then((data) => setStarship(data));
  }, [id]);

  if (!starship) return <div>Yükleniyor...</div>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{starship.name}</h2>
      <p>
        <strong>Model:</strong> {starship.model}
      </p>
      <p>
        <strong>Yolcu Kapasitesi:</strong> {starship.passengers}
      </p>
      <p>
        <strong>Maksimum Atmosferik Hız:</strong>{" "}
        {starship.max_atmosphering_speed}
      </p>
      <p>
        <strong>Üretici:</strong> {starship.manufacturer}
      </p>
      <p>
        <strong>Mürettebat:</strong> {starship.crew}
      </p>
      <p>
        <strong>Kargo Kapasitesi:</strong> {starship.cargo_capacity}
      </p>

      {/* Geri dön butonu */}
      <Link to="/">
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Geri Dön
        </button>
      </Link>
    </div>
  );
}

export default StarshipDetail;
