const RecipeList = ({ recipes }) => (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id.videoId} className="mb-2">
          <a href={`https://www.youtube.com/watch?v=${recipe.id.videoId}`} target="_blank" className="text-blue-500">
            {recipe.snippet.title}
          </a>
        </li>
      ))}
    </ul>
  );
  
  export default RecipeList;
  