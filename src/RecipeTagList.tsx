import RecipeTag from "./RecipeTag";

interface IRecipeTagListProps { tagList: string[]; onSelectTag: (tagName: string) => void; }

export default function RecipeTagList({ tagList, onSelectTag }: IRecipeTagListProps): JSX.Element {
	return (
		<ul>
			{tagList.map(tag => (
				<RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
			))}
		</ul>
	);
}