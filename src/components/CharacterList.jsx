import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";
import Error from "./Error";
import Loader from "./Loader";
import "../assets/styles/components/CharacterList.scss";

const CharacterList = () => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	async function getCharacter() {
		try {
			const response = await axios.get(
				"https://rickandmortyapi.com/api/character/"
			);
			const result = response.data.results;
			console.log(result);
			setCharacters(result); //update characters
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	}

	useEffect(() => {
		getCharacter(); //vamos a cargar los personajes
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
