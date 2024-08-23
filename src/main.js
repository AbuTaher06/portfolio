import { createApp } from 'vue';
import './assets/tailwind.css';

import App from './App.vue';
import router from './router'; // Import router if you have Vue Router configured


createApp(App).use(router).mount('#app');
