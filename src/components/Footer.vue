<template>
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; {{ currentYear }} Abu Taher. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-2">
          <router-link class="hover:underline">Privacy Policy</router-link>
          <router-link class="hover:underline">Terms of Service</router-link>
          <router-link to="/contact" class="hover:underline">Contact</router-link>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  footer {
    position: relative;
    bottom: 0;
    width: 100%;
  }
  </style>
  