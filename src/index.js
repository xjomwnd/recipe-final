import { getRandomRecipe } from './randomRecipe.js';
import { displaySavedRecipes } from './savedRecipe.js';

// Call the getRandomRecipe function and display the recipe on the page
const apiKey = '80cf1614d6df4af9a16d5be110db7167';
getRandomRecipe(apiKey);

// Call the displaySavedRecipes function to display saved recipes on the page
displaySavedRecipes();