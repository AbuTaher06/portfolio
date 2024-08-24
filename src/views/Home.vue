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
        <h2 class="text-3xl text-center mb-8">My Skills</h2>
        
        <div class="flex flex-wrap justify-center gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/3">
                <i class="fab fa-html5 text-4xl mb-4"></i>
                <h3 class="font-bold text-lg">HTML</h3>
                <div class="w-full bg-gray-200 rounded-full mt-2">
                    <div class="bg-blue-500 h-4 rounded-full" style="width: 90%;"></div>
                </div>
                <span class="text-sm">90%</span>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/3">
                <i class="fab fa-css3-alt text-4xl mb-4"></i>
                <h3 class="font-bold text-lg">CSS</h3>
                <div class="w-full bg-gray-200 rounded-full mt-2">
                    <div class="bg-blue-500 h-4 rounded-full" style="width: 85%;"></div>
                </div>
                <span class="text-sm">85%</span>
            </div>
    
            <div class="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/3">
                <i class="fab fa-js text-4xl mb-4"></i>
                <h3 class="font-bold text-lg">JavaScript</h3>
                <div class="w-full bg-gray-200 rounded-full mt-2">
                    <div class="bg-blue-500 h-4 rounded-full" style="width: 80%;"></div>
                </div>
                <span class="text-sm">80%</span>
            </div>
    
            <div class="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/3">
                <i class="fab fa-php text-4xl mb-4"></i>
                <h3 class="font-bold text-lg">PHP</h3>
                <div class="w-full bg-gray-200 rounded-full mt-2">
                    <div class="bg-blue-500 h-4 rounded-full" style="width: 75%;"></div>
                </div>
                <span class="text-sm">75%</span>
            </div>
    
            <div class="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/3">
                <i class="fab fa-laravel text-4xl mb-4"></i>
                <h3 class="font-bold text-lg">Laravel</h3>
                <div class="w-full bg-gray-200 rounded-full mt-2">
                    <div class="bg-blue-500 h-4 rounded-full" style="width: 70%;"></div>
                </div>
                <span class="text-sm">70%</span>
            </div>
    
            <div class="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/3">
                <i class="fab fa-vuejs text-4xl mb-4"></i>
                <h3 class="font-bold text-lg">Vue.js</h3>
                <div class="w-full bg-gray-200 rounded-full mt-2">
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
  