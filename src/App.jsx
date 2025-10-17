import React, { useState, useMemo } from 'react';
import { Search, Clock, ChefHat, Star, Heart, Filter, X, Users, Flame, Sparkles, TrendingUp } from 'lucide-react';

const RECIPES_DB = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    ingredients: ["paneer", "tomato", "butter", "cream", "cashew", "onion", "ginger", "garlic", "garam masala"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 30,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Blend tomatoes, cashews, and cream to make gravy",
      "Sauté onions, ginger, and garlic until golden",
      "Add tomato gravy and cook for 10 minutes",
      "Add garam masala and butter",
      "Add paneer cubes and simmer for 5 minutes"
    ],
    nutrition: { calories: 320, protein: 18, carbs: 12, fat: 24 }
  },
  {
    id: 2,
    name: "Chole Bhature",
    ingredients: ["chickpeas", "flour", "yogurt", "tomato", "onion", "ginger", "garlic", "chana masala", "oil"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 45,
    servings: 4,
    dietary: ["vegetarian"],
    instructions: [
      "Soak and pressure cook chickpeas until soft",
      "Make dough with flour, yogurt, and salt, let it rest",
      "Prepare chole masala with onions, tomatoes, and spices",
      "Roll and deep fry bhature until puffed and golden",
      "Serve hot chole with bhature"
    ],
    nutrition: { calories: 450, protein: 16, carbs: 68, fat: 14 }
  },
  {
    id: 3,
    name: "Palak Paneer",
    ingredients: ["spinach", "paneer", "onion", "tomato", "cream", "ginger", "garlic", "cumin", "garam masala"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 25,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Blanch spinach and blend into smooth puree",
      "Sauté onions, ginger, garlic, and tomatoes",
      "Add spinach puree and cook for 5 minutes",
      "Add cumin, garam masala, and cream",
      "Add paneer cubes and simmer for 5 minutes"
    ],
    nutrition: { calories: 285, protein: 16, carbs: 14, fat: 20 }
  },
  {
    id: 4,
    name: "Dal Tadka",
    ingredients: ["toor dal", "onion", "tomato", "ghee", "cumin", "garlic", "green chili", "turmeric", "coriander"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 30,
    servings: 4,
    dietary: ["vegetarian", "vegan", "gluten-free"],
    instructions: [
      "Pressure cook toor dal with turmeric until soft",
      "Prepare tadka with ghee, cumin, and garlic",
      "Add onions and green chilies, sauté until golden",
      "Add tomatoes and cook until soft",
      "Pour tadka over dal and garnish with coriander"
    ],
    nutrition: { calories: 220, protein: 12, carbs: 36, fat: 6 }
  },
  {
    id: 5,
    name: "Aloo Gobi",
    ingredients: ["potato", "cauliflower", "onion", "tomato", "ginger", "turmeric", "cumin", "coriander powder", "garam masala"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 25,
    servings: 4,
    dietary: ["vegetarian", "vegan", "gluten-free"],
    instructions: [
      "Cut potatoes and cauliflower into medium pieces",
      "Heat oil and add cumin seeds",
      "Add onions, ginger, and sauté until golden",
      "Add vegetables and spices, mix well",
      "Cover and cook until vegetables are tender"
    ],
    nutrition: { calories: 180, protein: 5, carbs: 32, fat: 5 }
  },
  {
    id: 6,
    name: "Rajma Masala",
    ingredients: ["kidney beans", "onion", "tomato", "ginger", "garlic", "cumin", "coriander powder", "garam masala", "rice"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 40,
    servings: 4,
    dietary: ["vegetarian", "vegan", "gluten-free"],
    instructions: [
      "Soak rajma overnight and pressure cook until soft",
      "Prepare masala with onions, tomatoes, ginger, and garlic",
      "Add spices and cook until oil separates",
      "Add cooked rajma with some water",
      "Simmer for 10 minutes and serve with rice"
    ],
    nutrition: { calories: 340, protein: 18, carbs: 58, fat: 4 }
  },
  {
    id: 7,
    name: "Masala Dosa",
    ingredients: ["rice", "urad dal", "potato", "onion", "mustard seeds", "curry leaves", "turmeric", "green chili"],
    cuisine: "Indian",
    difficulty: "Hard",
    cookTime: 60,
    servings: 4,
    dietary: ["vegetarian", "vegan", "gluten-free"],
    instructions: [
      "Soak rice and urad dal, grind into batter, ferment overnight",
      "Prepare potato masala with onions, turmeric, and spices",
      "Heat tawa and spread thin layer of batter",
      "Cook dosa until crispy and golden",
      "Fill with potato masala and serve with chutney"
    ],
    nutrition: { calories: 280, protein: 8, carbs: 52, fat: 6 }
  },
  {
    id: 8,
    name: "Vegetable Biryani",
    ingredients: ["basmati rice", "mixed vegetables", "yogurt", "onion", "tomato", "ginger", "garlic", "biryani masala", "saffron"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 50,
    servings: 6,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Soak basmati rice for 30 minutes",
      "Cook vegetables with yogurt and biryani masala",
      "Parboil rice with whole spices",
      "Layer rice and vegetables alternately",
      "Cook on dum for 20 minutes with saffron milk"
    ],
    nutrition: { calories: 380, protein: 10, carbs: 68, fat: 8 }
  },
  {
    id: 9,
    name: "Baingan Bharta",
    ingredients: ["eggplant", "onion", "tomato", "ginger", "garlic", "green chili", "coriander", "cumin", "turmeric"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 35,
    servings: 4,
    dietary: ["vegetarian", "vegan", "gluten-free"],
    instructions: [
      "Roast eggplant directly on flame until charred",
      "Peel and mash the roasted eggplant",
      "Sauté onions, ginger, garlic, and green chilies",
      "Add tomatoes and cook until soft",
      "Add mashed eggplant, spices, and cook for 10 minutes"
    ],
    nutrition: { calories: 160, protein: 4, carbs: 22, fat: 8 }
  },
  {
    id: 10,
    name: "Idli Sambar",
    ingredients: ["rice", "urad dal", "toor dal", "drumstick", "tomato", "tamarind", "sambar powder", "mustard seeds", "curry leaves"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 45,
    servings: 4,
    dietary: ["vegetarian", "vegan", "gluten-free"],
    instructions: [
      "Soak rice and urad dal, grind and ferment overnight",
      "Steam idli batter in idli moulds",
      "Cook toor dal with vegetables and tamarind",
      "Add sambar powder and prepare tadka",
      "Serve hot idlis with sambar"
    ],
    nutrition: { calories: 240, protein: 10, carbs: 48, fat: 2 }
  },
  {
    id: 11,
    name: "Pav Bhaji",
    ingredients: ["potato", "cauliflower", "peas", "tomato", "onion", "butter", "pav bhaji masala", "pav bread", "lemon"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 30,
    servings: 4,
    dietary: ["vegetarian"],
    instructions: [
      "Boil and mash all vegetables together",
      "Heat butter and sauté onions until golden",
      "Add tomatoes and pav bhaji masala",
      "Add mashed vegetables and cook well",
      "Serve hot bhaji with buttered pav and lemon"
    ],
    nutrition: { calories: 360, protein: 10, carbs: 54, fat: 14 }
  },
  {
    id: 12,
    name: "Poha",
    ingredients: ["flattened rice", "potato", "onion", "peanuts", "curry leaves", "mustard seeds", "turmeric", "lemon", "coriander"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 15,
    servings: 2,
    dietary: ["vegetarian", "vegan", "gluten-free"],
    instructions: [
      "Rinse poha in water and drain completely",
      "Heat oil and add mustard seeds, curry leaves",
      "Add onions, potatoes, and turmeric",
      "Add soaked poha and mix gently",
      "Garnish with lemon juice, coriander, and peanuts"
    ],
    nutrition: { calories: 280, protein: 6, carbs: 48, fat: 8 }
  },
  {
    id: 13,
    name: "Paneer Tikka",
    ingredients: ["paneer", "yogurt", "bell pepper", "onion", "ginger", "garlic", "tandoori masala", "lemon", "kasuri methi"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 25,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Cut paneer and vegetables into cubes",
      "Prepare marinade with yogurt, spices, and kasuri methi",
      "Marinate paneer and vegetables for 30 minutes",
      "Thread onto skewers alternating paneer and vegetables",
      "Grill or bake until charred and serve with chutney"
    ],
    nutrition: { calories: 260, protein: 16, carbs: 10, fat: 18 }
  },
  {
    id: 14,
    name: "Vegetable Pulao",
    ingredients: ["basmati rice", "mixed vegetables", "onion", "ghee", "cumin", "bay leaf", "cloves", "cinnamon", "green chili"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 25,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Soak basmati rice for 15 minutes",
      "Heat ghee and add whole spices",
      "Sauté onions and green chilies until golden",
      "Add vegetables and sauté for 2 minutes",
      "Add rice, water, and cook until done"
    ],
    nutrition: { calories: 320, protein: 8, carbs: 62, fat: 6 }
  },
  {
    id: 15,
    name: "Aloo Paratha",
    ingredients: ["wheat flour", "potato", "onion", "green chili", "coriander", "ginger", "ghee", "cumin", "garam masala"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 30,
    servings: 4,
    dietary: ["vegetarian"],
    instructions: [
      "Prepare dough with wheat flour, water, and salt",
      "Make potato filling with mashed potatoes and spices",
      "Roll out dough, place filling, and seal edges",
      "Roll again into flat circle",
      "Cook on tawa with ghee until golden brown on both sides"
    ],
    nutrition: { calories: 310, protein: 8, carbs: 52, fat: 9 }
  },
  {
    id: 16,
    name: "Chana Masala",
    ingredients: ["chickpeas", "onion", "tomato", "ginger", "garlic", "coriander powder", "cumin", "garam masala", "amchur"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 30,
    servings: 4,
    dietary: ["vegetarian", "vegan", "gluten-free"],
    instructions: [
      "Soak and cook chickpeas until soft",
      "Prepare masala with onions, tomatoes, and spices",
      "Add cooked chickpeas to the masala",
      "Simmer for 10 minutes with amchur",
      "Garnish with coriander and serve with rice or roti"
    ],
    nutrition: { calories: 280, protein: 14, carbs: 48, fat: 5 }
  },
  {
    id: 17,
    name: "Bhindi Masala",
    ingredients: ["okra", "onion", "tomato", "ginger", "cumin", "coriander powder", "turmeric", "amchur", "green chili"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 25,
    servings: 4,
    dietary: ["vegetarian", "vegan", "gluten-free"],
    instructions: [
      "Wash and dry okra, cut into pieces",
      "Heat oil and add cumin seeds",
      "Add onions and sauté until golden",
      "Add okra and cook on high heat",
      "Add spices and cook until okra is tender"
    ],
    nutrition: { calories: 120, protein: 4, carbs: 18, fat: 5 }
  },
  {
    id: 18,
    name: "Malai Kofta",
    ingredients: ["paneer", "potato", "cashew", "cream", "tomato", "onion", "ginger", "garlic", "garam masala", "kasuri methi"],
    cuisine: "Indian",
    difficulty: "Hard",
    cookTime: 50,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Make kofta with mashed paneer, potato, and spices, deep fry",
      "Prepare rich gravy with cashew paste, tomatoes, and cream",
      "Add garam masala and kasuri methi to gravy",
      "Add fried koftas just before serving",
      "Garnish with cream and serve hot"
    ],
    nutrition: { calories: 420, protein: 14, carbs: 28, fat: 30 }
  },
  {
    id: 19,
    name: "Upma",
    ingredients: ["semolina", "onion", "tomato", "curry leaves", "mustard seeds", "urad dal", "cashew", "green chili", "ginger"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 20,
    servings: 4,
    dietary: ["vegetarian", "vegan"],
    instructions: [
      "Dry roast semolina until fragrant",
      "Prepare tadka with mustard seeds, urad dal, curry leaves",
      "Add onions, tomatoes, and green chilies",
      "Add water and bring to boil",
      "Add roasted semolina and cook until water is absorbed"
    ],
    nutrition: { calories: 260, protein: 8, carbs: 48, fat: 6 }
  },
  {
    id: 20,
    name: "Kadhi Pakora",
    ingredients: ["yogurt", "gram flour", "onion", "pakora", "curry leaves", "mustard seeds", "turmeric", "fenugreek", "ginger"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 40,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Prepare kadhi with yogurt and gram flour",
      "Make pakoras with gram flour batter and onions, deep fry",
      "Prepare tadka with mustard seeds and curry leaves",
      "Add tadka to kadhi and simmer",
      "Add pakoras just before serving with rice"
    ],
    nutrition: { calories: 340, protein: 12, carbs: 42, fat: 15 }
  },
  {
    id: 21,
    name: "Methi Thepla",
    ingredients: ["wheat flour", "fenugreek leaves", "yogurt", "ginger", "green chili", "turmeric", "oil", "cumin", "sesame seeds"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 25,
    servings: 4,
    dietary: ["vegetarian"],
    instructions: [
      "Mix wheat flour, chopped methi leaves, and spices",
      "Add yogurt and water to make soft dough",
      "Roll into thin circles",
      "Cook on tawa with oil until golden spots appear",
      "Serve with pickle and yogurt"
    ],
    nutrition: { calories: 240, protein: 8, carbs: 38, fat: 8 }
  },
  {
    id: 22,
    name: "Veg Korma",
    ingredients: ["mixed vegetables", "cashew", "coconut", "yogurt", "onion", "tomato", "ginger", "garlic", "garam masala", "cream"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 35,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Blend cashews and coconut into smooth paste",
      "Sauté onions, ginger, and garlic until golden",
      "Add vegetables and cook partially",
      "Add cashew paste, yogurt, and cream",
      "Simmer until vegetables are tender and serve"
    ],
    nutrition: { calories: 380, protein: 10, carbs: 32, fat: 26 }
  },
  {
    id: 23,
    name: "Dhokla",
    ingredients: ["gram flour", "yogurt", "ginger", "green chili", "eno", "mustard seeds", "curry leaves", "sesame seeds", "lemon"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 30,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Mix gram flour, yogurt, and spices to make batter",
      "Add eno just before steaming",
      "Steam for 15-20 minutes until spongy",
      "Prepare tadka with mustard seeds and curry leaves",
      "Pour tadka over steamed dhokla and cut into pieces"
    ],
    nutrition: { calories: 180, protein: 8, carbs: 28, fat: 5 }
  },
  {
    id: 24,
    name: "Paneer Paratha",
    ingredients: ["wheat flour", "paneer", "onion", "green chili", "coriander", "ginger", "ghee", "garam masala", "amchur"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 30,
    servings: 4,
    dietary: ["vegetarian"],
    instructions: [
      "Prepare dough with wheat flour and water",
      "Make filling with crumbled paneer, onions, and spices",
      "Roll dough, add filling, and seal edges",
      "Roll again into flat paratha",
      "Cook on tawa with ghee until crispy and golden"
    ],
    nutrition: { calories: 340, protein: 14, carbs: 42, fat: 14 }
  },
  {
    id: 25,
    name: "Veg Kofta Curry",
    ingredients: ["mixed vegetables", "potato", "gram flour", "tomato", "onion", "cream", "cashew", "ginger", "garam masala"],
    cuisine: "Indian",
    difficulty: "Hard",
    cookTime: 45,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Make koftas with grated vegetables, potato, and gram flour",
      "Deep fry koftas until golden brown",
      "Prepare gravy with tomatoes, onions, and cashew paste",
      "Add cream and garam masala to gravy",
      "Add koftas just before serving"
    ],
    nutrition: { calories: 390, protein: 12, carbs: 38, fat: 24 }
  },
  {
    id: 26,
    name: "Khichdi",
    ingredients: ["rice", "moong dal", "turmeric", "cumin", "ghee", "ginger", "green chili", "tomato", "vegetables"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 25,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Wash rice and moong dal together",
      "Heat ghee and add cumin, ginger, green chili",
      "Add rice, dal, turmeric, and vegetables",
      "Add water and pressure cook for 3 whistles",
      "Serve hot with ghee and pickle"
    ],
    nutrition: { calories: 280, protein: 10, carbs: 52, fat: 5 }
  },
  {
    id: 27,
    name: "Matar Paneer",
    ingredients: ["paneer", "peas", "tomato", "onion", "cream", "ginger", "garlic", "garam masala", "kasuri methi", "cumin"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 25,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Lightly fry paneer cubes until golden",
      "Prepare tomato-onion gravy with ginger and garlic",
      "Add peas and cook for 5 minutes",
      "Add paneer cubes and cream",
      "Garnish with kasuri methi and garam masala"
    ],
    nutrition: { calories: 310, protein: 16, carbs: 18, fat: 20 }
  },
  {
    id: 28,
    name: "Aloo Matar",
    ingredients: ["potato", "peas", "tomato", "onion", "ginger", "garlic", "cumin", "coriander powder", "garam masala", "kasuri methi"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 25,
    servings: 4,
    dietary: ["vegetarian", "vegan", "gluten-free"],
    instructions: [
      "Heat oil and add cumin seeds",
      "Sauté onions, ginger, and garlic until golden",
      "Add tomatoes and cook until soft",
      "Add potatoes, peas, and spices",
      "Cook covered until vegetables are tender"
    ],
    nutrition: { calories: 210, protein: 6, carbs: 38, fat: 5 }
  },
  {
    id: 29,
    name: "Paneer Bhurji",
    ingredients: ["paneer", "onion", "tomato", "bell pepper", "ginger", "green chili", "turmeric", "cumin", "garam masala", "coriander"],
    cuisine: "Indian",
    difficulty: "Easy",
    cookTime: 20,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Crumble paneer into small pieces",
      "Heat oil and add cumin seeds",
      "Sauté onions, ginger, and green chilies",
      "Add tomatoes, bell peppers, and spices",
      "Add crumbled paneer and cook for 5 minutes"
    ],
    nutrition: { calories: 280, protein: 18, carbs: 12, fat: 20 }
  },
  {
    id: 30,
    name: "Saag Paneer",
    ingredients: ["spinach", "mustard greens", "paneer", "onion", "tomato", "cream", "ginger", "garlic", "cumin", "garam masala"],
    cuisine: "Indian",
    difficulty: "Medium",
    cookTime: 30,
    servings: 4,
    dietary: ["vegetarian", "gluten-free"],
    instructions: [
      "Blanch spinach and mustard greens, blend into puree",
      "Sauté onions, ginger, and garlic",
      "Add tomatoes and cook until soft",
      "Add greens puree and spices",
      "Add paneer and cream, simmer for 5 minutes"
    ],
    nutrition: { calories: 295, protein: 17, carbs: 15, fat: 21 }
  }
];

const DIETARY_OPTIONS = ['vegetarian', 'vegan', 'gluten-free'];
const DIFFICULTY_LEVELS = ['Easy', 'Medium', 'Hard'];

const App = () => {
  const [searchIngredients, setSearchIngredients] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedDietary, setSelectedDietary] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState([]);
  const [maxCookTime, setMaxCookTime] = useState(60);
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [servingMultiplier, setServingMultiplier] = useState(1);

  const allIngredients = useMemo(() => {
    const ingredientSet = new Set();
    RECIPES_DB.forEach(recipe => {
      recipe.ingredients.forEach(ing => ingredientSet.add(ing));
    });
    return Array.from(ingredientSet).sort();
  }, []);

  const addIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
    setSearchIngredients('');
  };

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter(i => i !== ingredient));
  };

  const toggleDietary = (diet) => {
    setSelectedDietary(prev =>
      prev.includes(diet) ? prev.filter(d => d !== diet) : [...prev, diet]
    );
  };

  const toggleDifficulty = (diff) => {
    setSelectedDifficulty(prev =>
      prev.includes(diff) ? prev.filter(d => d !== diff) : [...prev, diff]
    );
  };

  const toggleFavorite = (recipeId) => {
    setFavorites(prev =>
      prev.includes(recipeId) ? prev.filter(id => id !== recipeId) : [...prev, recipeId]
    );
  };

  const rateRecipe = (recipeId, rating) => {
    setRatings(prev => ({ ...prev, [recipeId]: rating }));
  };

  const filteredRecipes = useMemo(() => {
    let filtered = RECIPES_DB;

    if (selectedIngredients.length > 0) {
      filtered = filtered.map(recipe => {
        const matchedIngredients = recipe.ingredients.filter(ing =>
          selectedIngredients.includes(ing)
        );
        const matchPercentage = (matchedIngredients.length / recipe.ingredients.length) * 100;
        return { ...recipe, matchPercentage, matchedIngredients };
      }).filter(recipe => recipe.matchPercentage > 0)
        .sort((a, b) => b.matchPercentage - a.matchPercentage);
    } else {
      filtered = filtered.map(recipe => ({
        ...recipe,
        matchPercentage: 100,
        matchedIngredients: recipe.ingredients
      }));
    }

    if (selectedDietary.length > 0) {
      filtered = filtered.filter(recipe =>
        selectedDietary.every(diet => recipe.dietary.includes(diet))
      );
    }

    if (selectedDifficulty.length > 0) {
      filtered = filtered.filter(recipe =>
        selectedDifficulty.includes(recipe.difficulty)
      );
    }

    filtered = filtered.filter(recipe => recipe.cookTime <= maxCookTime);

    return filtered;
  }, [selectedIngredients, selectedDietary, selectedDifficulty, maxCookTime]);

  const suggestedIngredients = allIngredients.filter(ing =>
    ing.toLowerCase().includes(searchIngredients.toLowerCase()) &&
    !selectedIngredients.includes(ing)
  ).slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-2xl">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <ChefHat className="w-12 h-12 text-white drop-shadow-lg" />
                <Sparkles className="w-5 h-5 text-yellow-300 absolute -top-1 -right-1" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">
                  Smart Recipe Generator
                </h1>
                <p className="text-white/90 mt-1 text-lg font-medium">Discover your perfect meal in seconds</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{filteredRecipes.length} Recipes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 sticky top-4 border border-purple-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Filter className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Filters
                </h2>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  Search Ingredients
                </label>
                <div className="relative group">
                  <Search className="absolute left-4 top-3.5 w-5 h-5 text-purple-400 group-focus-within:text-purple-600 transition-colors" />
                  <input
                    type="text"
                    value={searchIngredients}
                    onChange={(e) => setSearchIngredients(e.target.value)}
                    placeholder="Type to search..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all bg-white shadow-sm"
                  />
                </div>
                {searchIngredients && suggestedIngredients.length > 0 && (
                  <div className="mt-3 border-2 border-purple-100 rounded-xl overflow-hidden shadow-lg max-h-48 overflow-y-auto bg-white">
                    {suggestedIngredients.map(ing => (
                      <button
                        key={ing}
                        onClick={() => addIngredient(ing)}
                        className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 text-sm font-medium transition-all border-b border-gray-100 last:border-0"
                      >
                        {ing}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {selectedIngredients.length > 0 && (
                <div className="mb-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Selected Ingredients ({selectedIngredients.length})
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {selectedIngredients.map(ing => (
                      <span
                        key={ing}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all"
                      >
                        {ing}
                        <button onClick={() => removeIngredient(ing)} className="hover:scale-110 transition-transform">
                          <X className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Dietary Preferences
                </label>
                <div className="space-y-2">
                  {DIETARY_OPTIONS.map(diet => (
                    <label key={diet} className="flex items-center p-3 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedDietary.includes(diet)}
                        onChange={() => toggleDietary(diet)}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500 focus:ring-2"
                      />
                      <span className="ml-3 text-sm font-medium capitalize group-hover:text-purple-700 transition-colors">{diet}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Difficulty Level
                </label>
                <div className="space-y-2">
                  {DIFFICULTY_LEVELS.map(diff => (
                    <label key={diff} className="flex items-center p-3 rounded-xl hover:bg-orange-50 transition-colors cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedDifficulty.includes(diff)}
                        onChange={() => toggleDifficulty(diff)}
                        className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500 focus:ring-2"
                      />
                      <span className="ml-3 text-sm font-medium group-hover:text-orange-700 transition-colors">{diff}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-pink-500" />
                    Max Cooking Time
                  </span>
                  <span className="text-pink-600 font-bold">{maxCookTime} min</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={maxCookTime}
                  onChange={(e) => setMaxCookTime(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {filteredRecipes.length} Recipe{filteredRecipes.length !== 1 ? 's' : ''} Found
              </h2>
              {favorites.length > 0 && (
                <div className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg">
                  <Heart className="w-5 h-5 fill-white" />
                  <span className="font-bold">{favorites.length} Favorites</span>
                </div>
              )}
            </div>

            {filteredRecipes.length === 0 ? (
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-12 text-center border border-purple-100">
                <div className="relative inline-block">
                  <ChefHat className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                  <Sparkles className="w-8 h-8 text-purple-300 absolute -top-2 -right-2" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No recipes found</h3>
                <p className="text-gray-500">Try adjusting your filters or add different ingredients</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredRecipes.map(recipe => (
                  <div
                    key={recipe.id}
                    className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                            {recipe.name}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <span className="flex items-center gap-1 bg-purple-100 px-3 py-1 rounded-full font-medium">
                              <Clock className="w-4 h-4 text-purple-600" />
                              {recipe.cookTime} min
                            </span>
                            <span className="flex items-center gap-1 bg-orange-100 px-3 py-1 rounded-full font-medium text-orange-700">
                              <Flame className="w-4 h-4" />
                              {recipe.difficulty}
                            </span>
                            <span className="bg-pink-100 px-3 py-1 rounded-full font-medium text-pink-700">
                              {recipe.cuisine}
                            </span>
                            <span className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full font-medium text-blue-700">
                              <Users className="w-4 h-4" />
                              {recipe.servings}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleFavorite(recipe.id)}
                          className="p-3 hover:bg-red-50 rounded-full transition-all hover:scale-110"
                        >
                          <Heart
                            className={`w-6 h-6 transition-all ${
                              favorites.includes(recipe.id)
                                ? 'fill-red-500 text-red-500 scale-110'
                                : 'text-gray-400 hover:text-red-400'
                            }`}
                          />
                        </button>
                      </div>

                      {selectedIngredients.length > 0 && (
                        <div className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-purple-500" />
                              Ingredient Match
                            </span>
                            <span className="text-lg font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                              {Math.round(recipe.matchPercentage)}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500 shadow-lg"
                              style={{ width: `${recipe.matchPercentage}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-600 mt-2 font-medium">
                            {recipe.matchedIngredients.length} of {recipe.ingredients.length} ingredients available
                          </p>
                        </div>
                      )}

                      {recipe.dietary.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {recipe.dietary.map(diet => (
                            <span
                              key={diet}
                              className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs rounded-full capitalize font-bold shadow-md"
                            >
                              ✓ {diet}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="grid grid-cols-4 gap-3 mb-4">
                        <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200">
                          <div className="text-xl font-black text-orange-600">
                            {recipe.nutrition.calories}
                          </div>
                          <div className="text-xs text-gray-600 font-semibold">Calories</div>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                          <div className="text-xl font-black text-blue-600">
                            {recipe.nutrition.protein}g
                          </div>
                          <div className="text-xs text-gray-600 font-semibold">Protein</div>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                          <div className="text-xl font-black text-yellow-600">
                            {recipe.nutrition.carbs}g
                          </div>
                          <div className="text-xs text-gray-600 font-semibold">Carbs</div>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                          <div className="text-xl font-black text-purple-600">
                            {recipe.nutrition.fat}g
                          </div>
                          <div className="text-xs text-gray-600 font-semibold">Fat</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-4 p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                        <span className="text-sm font-bold text-gray-700">Rate:</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map(star => (
                            <button
                              key={star}
                              onClick={() => rateRecipe(recipe.id, star)}
                              className="hover:scale-125 transition-transform"
                            >
                              <Star
                                className={`w-6 h-6 ${
                                  ratings[recipe.id] >= star
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                        {ratings[recipe.id] && (
                          <span className="text-sm font-bold text-yellow-600">
                            ({ratings[recipe.id]}/5)
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => {
                          setSelectedRecipe(recipe);
                          setServingMultiplier(1);
                        }}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        View Full Recipe →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedRecipe && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-5 flex justify-between items-center shadow-lg z-10">
              <h2 className="text-3xl font-black text-white">{selectedRecipe.name}</h2>
              <button
                onClick={() => setSelectedRecipe(null)}
                className="p-2 hover:bg-white/20 rounded-full transition-all"
              >
                <X className="w-7 h-7 text-white" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full font-bold text-purple-700">
                  <Clock className="w-5 h-5" />
                  {selectedRecipe.cookTime} min
                </span>
                <span className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full font-bold text-orange-700">
                  <Flame className="w-5 h-5" />
                  {selectedRecipe.difficulty}
                </span>
                <span className="bg-pink-100 px-4 py-2 rounded-full font-bold text-pink-700">
                  {selectedRecipe.cuisine}
                </span>
              </div>

              <div className="mb-6 p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Adjust Servings
                </label>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setServingMultiplier(Math.max(0.5, servingMultiplier - 0.5))}
                    className="w-12 h-12 bg-white border-2 border-purple-300 rounded-full hover:bg-purple-100 font-bold text-xl text-purple-600 transition-all shadow-md hover:shadow-lg"
                  >
                    -
                  </button>
                  <span className="text-2xl font-black text-purple-600 min-w-[140px] text-center">
                    {selectedRecipe.servings * servingMultiplier} servings
                  </span>
                  <button
                    onClick={() => setServingMultiplier(servingMultiplier + 0.5)}
                    className="w-12 h-12 bg-white border-2 border-purple-300 rounded-full hover:bg-purple-100 font-bold text-xl text-purple-600 transition-all shadow-md hover:shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2 text-gray-800">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                  Ingredients
                </h3>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border border-gray-200">
                      <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0" />
                      <span className="capitalize font-medium text-gray-800">
                        {ing}
                        {selectedIngredients.includes(ing) && (
                          <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full font-bold">
                            ✓ Have it
                          </span>
                        )}
                        {!selectedIngredients.includes(ing) && selectedIngredients.length > 0 && (
                          <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-1 rounded-full font-bold">
                            Need it
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2 text-gray-800">
                  <ChefHat className="w-6 h-6 text-pink-500" />
                  Instructions
                </h3>
                <ol className="space-y-4">
                  {selectedRecipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-black shadow-md">
                        {idx + 1}
                      </span>
                      <span className="pt-1 font-medium text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-black mb-4 text-gray-800">
                  Nutritional Information
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 p-5 rounded-2xl text-center border-2 border-orange-200 shadow-md">
                    <div className="text-3xl font-black text-orange-600">
                      {Math.round(selectedRecipe.nutrition.calories)}
                    </div>
                    <div className="text-sm text-gray-700 font-bold mt-1">Calories</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-5 rounded-2xl text-center border-2 border-blue-200 shadow-md">
                    <div className="text-3xl font-black text-blue-600">
                      {Math.round(selectedRecipe.nutrition.protein)}g
                    </div>
                    <div className="text-sm text-gray-700 font-bold mt-1">Protein</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-5 rounded-2xl text-center border-2 border-yellow-200 shadow-md">
                    <div className="text-3xl font-black text-yellow-600">
                      {Math.round(selectedRecipe.nutrition.carbs)}g
                    </div>
                    <div className="text-sm text-gray-700 font-bold mt-1">Carbs</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-5 rounded-2xl text-center border-2 border-purple-200 shadow-md">
                    <div className="text-3xl font-black text-purple-600">
                      {Math.round(selectedRecipe.nutrition.fat)}g
                    </div>
                    <div className="text-sm text-gray-700 font-bold mt-1">Fat</div>
                  </div>
                </div>
              </div>

              {selectedRecipe.dietary.length > 0 && (
                <div>
                  <h3 className="text-2xl font-black mb-4 text-gray-800">Dietary Information</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedRecipe.dietary.map(diet => (
                      <span
                        key={diet}
                        className="px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full capitalize font-bold shadow-lg"
                      >
                        ✓ {diet}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;