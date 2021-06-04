import { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

const useGetCharacters = () => {
	const [characters, setCharacters] = useLocalStorage("characters", ""); //key value
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	async function getCharacters() {
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

	return { characters, loading, error, getCharacters }; //props available
};

export default useGetCharacters;
