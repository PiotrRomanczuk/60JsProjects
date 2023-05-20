const API_KEY = '3d31646544a94c96bf5df39f618e1bfc';
// import dotenv from './node_modules/dotenv';

// console.log(dotenv);

const recipeListEl = document.getElementById('recipe-list');

const getRecipes = async () => {
	const API_URL = 'https://api.spoonacular.com/';
	// const options = { 'Content-Type': application/json };

	const response = await fetch(
		`${API_URL}/recipes/random?number=10&apiKey=${API_KEY}`
	);

	const data = await response.json();
	return data.recipes;
};

const displayRecipe = (recipes) => {
	const recipeListEl = document.getElementById('recipe-list');

	if (!recipeListEl) {
		console.error('recipe-list element not found');
		return;
	} else {
		console.log('The recipe list has been found');
	}

	recipeListEl.innerHTML = '';

	if (!Array.isArray(recipes) || recipes.length === 0) {
		console.warn('No recipes found');
		return;
	}

	recipes.forEach((recipe) => {
		const recipeItemEl = document.createElement('li');
		recipeItemEl.classList.add('recipe-item');

		const recipeImageEl = document.createElement('img');
		recipeImageEl.src = recipe.image;
		recipeImageEl.alt = 'recipe image';

		const recipeTitleEl = document.createElement('h2');
		recipeTitleEl.innerText = recipe.title;

		const recipeIngredientsEl = document.createElement('p');
		recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong>${recipe.extendedIngredients
			.map((ingredient) => ingredient.original)
			.join(', ')}`;

		recipeItemEl.appendChild(recipeImageEl);
		recipeItemEl.appendChild(recipeTitleEl);
		recipeItemEl.appendChild(recipeIngredientsEl);
		recipeListEl.appendChild(recipeItemEl);
	});
};

const init = async () => {
	const recipes = await getRecipes();
	console.log(recipes);
	displayRecipe(recipes);
};

init();
