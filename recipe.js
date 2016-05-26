'use strict';

function addIngredient(recipeObj, ingredientKey, amountsValue) {
  recipeObj[ingredientKey]=amountsValue;
  return recipeObj;

}
