import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';
//import ProjectDetail from '../views/ProjectDetail.vue'; // Ensure this path is correct

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
<<<<<<< HEAD
];
=======
  ];

>>>>>>> a325ac8e42e0b76146fb50fcbd84b5a140bdc394
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
