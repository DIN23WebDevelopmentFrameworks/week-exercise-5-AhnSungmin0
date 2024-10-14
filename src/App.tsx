import { useEffect, useState } from 'react';
import RecipeList from './RecipeList';
import RecipeTagList from './RecipeTagList';

const App = () => {
	const [tags, setTags] = useState([]);
	const [recipes, setRecipes] = useState([]);
	const [selectedTag, setSelectedTag] = useState(null);

	useEffect(() => {
		fetch('https://dummyjson.com/recipes/tags')
			.then(response => response.json())
			.then(data => setTags(data));
	}, []);
	const handleTagSelect = (tag) => {
		setSelectedTag(tag);
		// Fetch recipes for the selected tag
		fetch(`https://dummyjson.com/recipes/tag/${tag}`)
			.then(response => response.json())
			.then(data => setRecipes(data.recipes))
			.catch(error => console.error('Error fetching recipes:', error));
	};
	/*<ul>
		<li>On start the application displays a list of recipe tags such as 'pasta', 'cookies' etc. The tag information is loaded from an API (https://dummyjson.com/recipes/tags)</li>
		<li> The user can click on a tag and the application will then hide the tag list and display a list of recipes matching the selected tag. The recipe information for the clicked tag is loaded from an API (https://dummyjson.com/recipes/tag/Pizza).</li>
		<li> User can also go back to the tag list. </li>
		<li> Each receipe is displayed as box where recipe data such as ingredients and instructions are displayed</li>
	</ul>*/
	return (
		<div>
			<h1>ACME Recipe O'Master</h1>
			<div>
				{selectedTag && <button onClick={() => setSelectedTag(null)}>Back</button>}
				{selectedTag ? (
					<RecipeList recipes={recipes} />
				) : (
					<RecipeTagList tagList={tags} onSelectTag={handleTagSelect} />
				)}
				{selectedTag}
			</div>
		</div>
	);
};

export default App;
