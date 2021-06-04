import React, { useEffect } from "react";
import Character from "./Character";
import Error from "./Error";
import Loader from "./Loader";
import "../assets/styles/components/CharacterList.scss";
import useGetCharacters from "../hooks/useGetCharacters";

const CharacterList = () => {
	const { characters, loading, error, getCharacters } = useGetCharacters();
	useEffect(() => {
		getCharacters(); //vamos a cargar los personajes
	}, []);

	return (
		<div className="characterList">
			{loading ? (
				<Loader />
			) : error ? (
				<Error />
			) : (
				characters.map((character) => (
					<Character key={character.id} data={character} />
				))
			)}
		</div>
	);
};

export default CharacterList;
