<template>
    <div class="home">
      <section class="hero bg-black py-20 text-center">
        <h1 class="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p class="mt-4 text-lg">I'm a passionate developer specializing in web technologies.</p>
        <router-link to="/projects" class="mt-8 inline-block bg-blue-500 text-white px-6 py-2 rounded">
          View My Work
        </router-link>
      </section>
      <section class="skills py-20 bg-lime-300">
        <h2 class="text-3xl text-center">My Skills</h2>
        
        <div class="flex justify-center mt-6 space-x-10">
          <div class="text-center">
            <h3 class="font-bold">HTML</h3>
            <div class="w-full bg-gray-200 rounded-full">
              <div class="bg-blue-500 h-4 rounded-full" style="width: 90%;"></div>
            </div>
            <span class="text-sm">90%</span>
          </div>
          <div class="text-center">
            <h3 class="font-bold">CSS</h3>
            <div class="w-full bg-gray-200 rounded-full">
              <div class="bg-blue-500 h-4 rounded-full" style="width: 85%;"></div>
            </div>
            <span class="text-sm">85%</span>
          </div>
          <div class="text-center">
            <h3 class="font-bold">JavaScript</h3>
            <div class="w-full bg-gray-200 rounded-full">
              <div class="bg-blue-500 h-4 rounded-full" style="width: 80%;"></div>
            </div>
            <span class="text-sm">80%</span>
          </div>
        </div>
      
        <div class="flex justify-center mt-6 space-x-10">
          <div class="text-center">
            <h3 class="font-bold">PHP</h3>
            <div class="w-full bg-gray-200 rounded-full">
              <div class="bg-blue-500 h-4 rounded-full" style="width: 75%;"></div>
            </div>
            <span class="text-sm">75%</span>
          </div>
          <div class="text-center">
            <h3 class="font-bold">Laravel</h3>
            <div class="w-full bg-gray-200 rounded-full">
              <div class="bg-blue-500 h-4 rounded-full" style="width: 70%;"></div>
            </div>
            <span class="text-sm">70%</span>
          </div>
          <div class="text-center">
            <h3 class="font-bold">Vue.js</h3>
            <div class="w-full bg-gray-200 rounded-full">
              <div class="bg-blue-500 h-4 rounded-full" style="width: 80%;"></div>
            </div>
            <span class="text-sm">80%</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    
  </template>
  
  <script>
  import Footer from '../components/Footer.vue';
  export default {
    name: 'Home',
    components: {
      Footer
    }
  };
  </script>
  
  <style scoped>
  .hero {
    background-image: url('path/to/hero-image.jpg');
    background-size: cover;
    color: white;
  }
  </style>
  