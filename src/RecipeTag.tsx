interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

export default function RecipeTag({ tagName, onSelectTag }: IRecipeTagProps): JSX.Element {
	return (
		<li onClick={() => onSelectTag(tagName)}>
			{tagName}
		</li>
	);
};
