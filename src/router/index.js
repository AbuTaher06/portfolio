import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';

import ProjectDetail from '../views/ProjectDetail.vue';
 // Import the ProjectDetail component

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetail }, // Add the dynamic route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
