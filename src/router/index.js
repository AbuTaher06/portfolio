import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';
import ProjectDetail from '../views/ProjectDetail.vue'; // Ensure this path is correct

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
<<<<<<< HEAD
 // { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetail },
=======
  { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetail },
>>>>>>> 5893d573301aadaf938c78f3385e11ebdd4554af
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
