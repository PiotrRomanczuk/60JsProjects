const API_KEY = '3d31646544a94c96bf5df39f618e1bfc';
// import dotenv from './node_modules/dotenv';

// console.log(dotenv);

const getRecipes = async () => {
	const API_URL = 'https://api.spoonacular.com/';
	// const options = { 'Content-Type': application/json };

	const response = await fetch(
		`${API_URL}/recipes/random?number=10&apiKey=${API_KEY}`
	);

	const data = await response.json();

	return data.recipes;
};

const init = async () => {
	const recipes = await getRecipes();
	console.log(recipes);
};

init();
