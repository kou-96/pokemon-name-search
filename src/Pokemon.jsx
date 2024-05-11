import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./App.css";
import nopokemon from "/nopokemon.jpeg";
import { Page404 } from "./Page404.jsx";

export function Pokemon() {
  const [searchParams] = useSearchParams();
  const inputField = searchParams.get("inputField");
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function pokemonName() {
      const pokemon = await getPokemonName();
      setPokemonName(pokemon);
    }
    async function getPokemon() {
      const pokemon = await getPokemonData();
      setPokemonImage(pokemon);
    }
    pokemonName();
    getPokemon();
  });

  const goBack = () => {
    navigate("/");
  };

  async function getPokemonData() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputField}`);
    const resbody = await res.json();
    return resbody.sprites.front_default;
  }

  async function getPokemonName() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputField}`);
    const resbody = await res.json();
    return resbody.species.name;
  }

  return (
    <>
      <h1>{pokemonName}</h1>

      <img
        src={pokemonImage}
        width={400}
        height={400}
        onError={(e) => (e.target.src = nopokemon)}
      />
      <div style={{ margin: 50 }}>
        <button type="submit" onClick={goBack}>
          戻る
        </button>
      </div>
    </>
  );
}

export default Pokemon;
