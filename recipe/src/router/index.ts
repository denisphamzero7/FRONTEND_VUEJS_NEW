import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
import FavoritesView from '@/views/FavoritesView.vue';
import AddRecipeView from '@/views/AddRecipeView.vue';
import RecipeView from '@/views/RecipeView.vue'
import NoFoundView from '@/views/NoFoundView.vue'
import EditRecipeView from '@/views/EditRecipeView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
    {
      path: '/add-recipe',
      name: 'addrecipe',
      component: AddRecipeView,
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeView,
    },
    {
      path: '/:pathMath(.*)*',
      name: 'not-found',
      component: NoFoundView,
    },
    {
      path: '/recipe/:id/edit',
      name: 'edit-recipe',
      component: EditRecipeView
    },
  ],
});

export default router;
