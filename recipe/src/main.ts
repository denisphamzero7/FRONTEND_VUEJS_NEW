import '@/assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';
import localStoragePlugin from '@/plugins/pinia';
const pinia = createPinia()
const app = createApp(App);
function ourplugin(){
  return{
    secret:'Dummy'
  }
}
pinia.use(ourplugin)
pinia.use(localStoragePlugin)
app.use(pinia)
app.use(router);

app.mount('#app');
