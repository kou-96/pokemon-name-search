import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./App.css";
import nopokemon from "/nopokemon.jpeg";

export function Pokemon() {
  const [searchParams] = useSearchParams();
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const navigate = useNavigate();
  const inputField = searchParams.get("inputField");

  useEffect(() => {
    async function getPokemon() {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputField}`
      );
      const resbody = await res.json();

      setPokemonName(resbody.species.name);
      setPokemonImage(resbody.sprites.front_default);
    }
    getPokemon();
  }, [inputField]);

  const goBack = () => {
    navigate("/");
  };

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
