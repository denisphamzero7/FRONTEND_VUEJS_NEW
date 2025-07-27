import { defineStore } from 'pinia';
import { ref,computed } from 'vue';

export interface Recipe {
  id: string;
  name: string;
  description: string;
}

// Tạo kiểu NewRecipe bằng cách loại bỏ trường 'id' từ Recipe
type NewRecipe = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  // Danh sách công thức lưu trữ
  const recipes = ref<Recipe[]>([]);
  const favoriteIds = ref<string[]>([]);
  /**
   * Thêm công thức mới vào store
   * @param recipe Dữ liệu công thức (không bao gồm id)
   * @returns Recipe mới vừa được thêm
   */
  const toggleFavorite = (id: string) => {

    if (favoriteIds.value.includes(id)) {
      favoriteIds.value = favoriteIds.value.filter((favId) => favId !== id);
    } else {
      favoriteIds.value.push(id);
    }
  };


  const addRecipe = (recipe: NewRecipe): Recipe => {
    const newRecipe: Recipe = {
      id: Date.now().toString(), // tạo id duy nhất dựa trên timestamp
      ...recipe,
    };
    recipes.value.push(newRecipe);
    return newRecipe; // trả về để có thể điều hướng hoặc xử lý tiếp
  };
  const getRecipeById=(id:string)=>recipes.value.find((recipe)=>recipe.id===id)
  const isFavorite = (id: string) => favoriteIds.value.includes(id);
  const editRecipe = (updatedRecipe: Recipe) => {
    const index = recipes.value.findIndex((recipe) => recipe.id === updatedRecipe.id);
    if (index !== -1) {
      recipes.value[index] = updatedRecipe;
    }
  };
  const favotiteRecipes = computed(() =>
    recipes.value.filter((recipe) => favoriteIds.value.includes(recipe.id))
  );
  const filteredRecipes = (query: string) => {
    const lower = query.trim().toLowerCase();
    if (!lower) return recipes.value;
    return recipes.value.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(lower) ||
        recipe.description.toLowerCase().includes(lower)
    );
  };
  return {
    recipes,   // state: danh sách công thức
    addRecipe,
    editRecipe, // action: thêm công thức và trả về recipe mới
    getRecipeById ,// getter,
    favoriteIds,
    isFavorite,
    favotiteRecipes,
    toggleFavorite,
    filteredRecipes
  };
});
