import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredients }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealIdeas = async () => {
      if (ingredients.length === 0) {
        setMeals([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        
        console.log("Ingredients passed to MealIdeas:", ingredients);

        
        const cleanedIngredients = ingredients.map((ingredient) =>
          ingredient.replace(/[^a-zA-Z0-9 ]/g, "").trim().toLowerCase()
        );

        console.log("Cleaned ingredients:", cleanedIngredients);

        
        const promises = cleanedIngredients.map((ingredient) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            .then((response) => response.json())
            .then((data) => {
              console.log(`Response for ${ingredient}:`, data); 
              if (!data.meals) {
                return []; 
              }
              return data.meals;
            })
            .catch((err) => {
              console.error("Error fetching data for", ingredient, err);
              return [];
            })
        );

        
        const results = await Promise.all(promises);

        
        const allMeals = results.flat();
        console.log("All meals fetched:", allMeals); 

        
        const uniqueMeals = allMeals.filter(
          (meal, index, self) =>
            index === self.findIndex((m) => m.idMeal === meal.idMeal)
        );
        console.log("Unique meals:", uniqueMeals); 

        
        const mealDetailsPromises = uniqueMeals.map((meal) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
            .then((response) => response.json())
            .then((data) => {
              const mealDetails = data.meals[0];
              const ingredientsList = [];
              for (let i = 1; i <= 20; i++) {
                if (mealDetails[`strIngredient${i}`]) {
                  ingredientsList.push(mealDetails[`strIngredient${i}`].toLowerCase());
                }
              }
              return { ...meal, ingredients: ingredientsList };
            })
        );

        
        const mealsWithIngredients = await Promise.all(mealDetailsPromises);

        console.log("Meals with detailed ingredients:", mealsWithIngredients); 

        
        const filteredMeals = mealsWithIngredients.filter((meal) =>
          cleanedIngredients.every((ingredient) =>
            meal.ingredients.some((mealIngredient) =>
              mealIngredient.includes(ingredient)
            )
          )
        );
        console.log("Filtered meals after matching ingredients:", filteredMeals); 

        setMeals(filteredMeals);
      } catch (err) {
        console.error("Error fetching meal ideas:", err);
        setError("Failed to fetch meal ideas. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMealIdeas();
  }, [ingredients]);

  if (loading) {
    return <p>Loading meal ideas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {meals.length === 0 ? (
        <p>No meal ideas available for the selected ingredients.</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} className="meal-item">
              <h3 className="meal-title">{meal.strMeal}</h3>
              <div className="ingredients-container">
                <ul className="ingredients-list">
                  {meal.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = `
  .meal-item {
    position: relative;
    margin-bottom: 10px;
  }

  .meal-title {
    cursor: pointer;
    font-size: 18px;
    font-weight: bold; /* Make meal titles bold */
  }

  .ingredients-container {
    display: none;
    position: absolute;
    top: 30px; /* Adjust according to your design */
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 200px; /* Adjust the width as needed */
    z-index: 1;
  }

  .meal-item:hover .ingredients-container {
    display: block;
  }

  .ingredients-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .ingredients-list li {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const styleSheet = document.createElement("style");

styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
