import React, { useState } from "react";
import "./styles.css";

var genreList = {
  THRILLER: [
    { name: "Attack on Titan", rating: "⭐ 9/10" },

    { name: "Demon slayer", rating: "⭐ 8/10" },

    { name: "Black Clover", rating: "⭐ 9/10" }
  ],

  SAD: [
    { name: "Your lie in April", rating: "⭐ 9.5/10" },

    { name: "Your Name", rating: "⭐ 10/10" },

    { name: "The Shape of your Voice", rating: "⭐ 10/10" }
  ],

  PSYCHOLOGICAL: [
    { name: "Death Note", rating: "⭐ 10/10" },

    { name: "Psycho Pass", rating: "⭐ 8.5/10" },

    { name: "The Promised Neverland", rating: "⭐ 9/10" }
  ],

  SPORTS: [
    { name: "One Outs", rating: "⭐ 8.5/10" },

    { name: "Kuroko no Basket", rating: "⭐ 8/10" },

    { name: "Haikyuu", rating: "⭐ 8/10" }
  ],

  ALLROUNDER: [
    { name: "Naruto", rating: "⭐ 9.5/10" },

    { name: "One Piece", rating: "⭐ 9/10" },

    { name: "Bleach", rating: "⭐ 8.5/10" }
  ]
};

var animeList = Object.keys(genreList);

export default function App() {
  var [userChoice, setUserChoice] = useState([""]);

  function clickHandler(genre) {
    console.log("clicked", genre);
    //var meaning = animeList[item]
    setUserChoice(genre);
  }
  return (
    <div className="App">
      <h1>Anime Selector</h1>
      <h2>Choose your genre</h2>

      <div className="btn-container">
        {animeList.map(function (genre) {
          return (
            <button
              key={genre}
              onClick={() => clickHandler(genre)}
              className="btn-genre"
            >
              {genre}
            </button>
          );
        })}
        <hr></hr>
      </div>

      {genreList[userChoice]?.map((show) => (
        <div className="result-container">
          {show.name}{" "}
          <p>
            <small> {show.rating} </small>{" "}
          </p>
        </div>
      ))}
    </div>
  );
}
