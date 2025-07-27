import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Recipe {
  id: string;
  name: string;
  description: string;
}

// Tạo kiểu NewRecipe bằng cách loại bỏ trường 'id' từ Recipe
type NewRecipe = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  // Danh sách công thức lưu trữ
  const recipes = ref<Recipe[]>([]);

  /**
   * Thêm công thức mới vào store
   * @param recipe Dữ liệu công thức (không bao gồm id)
   * @returns Recipe mới vừa được thêm
   */
  const addRecipe = (recipe: NewRecipe): Recipe => {
    const newRecipe: Recipe = {
      id: Date.now().toString(), // tạo id duy nhất dựa trên timestamp
      ...recipe,
    };
    recipes.value.push(newRecipe);
    return newRecipe; // trả về để có thể điều hướng hoặc xử lý tiếp
  };

  return {
    recipes,   // state: danh sách công thức
    addRecipe // action: thêm công thức và trả về recipe mới
  };
});
