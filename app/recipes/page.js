// app/recipes/page.js
'use client'; // Add this to ensure this component runs only on the client side

import { useState, useEffect } from 'react';
import axios from 'axios';
import Fuse from 'fuse.js';
import RecipeList from '../../components/RecipeList';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCa6wuHBi4VzlxfaxwBSY8IA&maxResults=10&order=date&key=AIzaSyB6hPpgtu-7XbnS3CEK2ZcoCgRxMtylNpA`);
      setRecipes(res.data.items);
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    const fuse = new Fuse(recipes, {
      keys: ['snippet.title', 'snippet.description']
    });
    const result = fuse.search(searchTerm);
    setFilteredRecipes(result.map(res => res.item));
  }, [searchTerm, recipes]);

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default Recipes;
