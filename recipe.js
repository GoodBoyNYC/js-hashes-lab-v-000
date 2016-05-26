'use strict';

function addIngredient(recipeObj, ingredientKey, amountsValue) {
  recipeObj[ingredientKey]=amountsValue;
  return recipeObj;
};

function removeIngredient(recipeObj, ingredientKey) {
  delete recipeObj[ingredientKey];
  return recipeObj;
};

function updateIngredient(recipeObj, ingredientKey, amountsValue) {
  recipeObj[ingredientKey]=amountsValue;
  return recipeObj;
};

function readRecipe(recipeObj){
  for(var ingredientKey in recipeObj){
    //console.log(`this recipe calls for ${recipeObj[ingredientKey]} of ${ingredientKey}`);
    console.log("this recipe calls for " + recipeObj[ingredientKey] + " of " + ingredientKey);
  }
};
