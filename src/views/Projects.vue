<template>
    <div class="projects">
      <section class="projects-list py-20 px-4">
        <h1 class="text-4xl text-center">My Projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <div class="project bg-white p-6 rounded shadow">
            <h2 class="text-xl font-bold">Project 1</h2>
            <p>A brief description of the project goes here.</p>
            <router-link to="/project-1" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
              View Details
            </router-link>
          </div>
          <div class="project bg-white p-6 rounded shadow">
            <h2 class="text-xl font-bold">Project 2</h2>
            <p>A brief description of the project goes here.</p>
            <router-link to="/project-2" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
              View Details
            </router-link>
          </div>
          <div class="project bg-white p-6 rounded shadow">
            <h2 class="text-xl font-bold">Project 3</h2>
            <p>A brief description of the project goes here.</p>
            <router-link to="/project-3" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
              View Details
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Projects',
  };
  </script>
  
  <style scoped>
  .projects-list {
    background-color: #f1f1f1;
  }
  </style>
  