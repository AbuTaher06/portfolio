<template>
    <div>
      <div class="bg-green-500">
        <nav class="container px-6 py-5 mx-auto md:flex md:justify-between md:items-center">
          <div class="flex items-center justify-between w-full md:w-auto">
            <router-link
            to="/"
            class="flex items-center text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
          >
            <img src="../assets/taher.png" class="w-8 h-8 rounded-full mr-2" alt="taher" />
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">Abu Taher</span>
          </router-link>
          
  
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="text-gray-800 hover:text-gray-400 focus:outline-none"
              >
                <!-- Hamburger icon -->
                <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
  
                <!-- Close (X) icon -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
  
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'block' : 'hidden'"
            class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
          >
            <li>
              <router-link
                to="/"
                class="text-xl font-bold text-gray-800 hover:text-blue-400"
                active-class="text-blue-500"
                exact-active-class="text-blue-500"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-xl font-bold text-gray-800 hover:text-blue-400"
                active-class="text-blue-500"
                exact-active-class="text-blue-500"
              >
                About
              </router-link>
            </li>
            <li>
              <router-link
                to="/projects"
                class="text-xl font-bold text-gray-800 hover:text-blue-400"
                active-class="text-blue-500"
                exact-active-class="text-blue-500"
              >
                Projects
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-xl font-bold text-gray-800 hover:text-blue-400"
                active-class="text-blue-500"
                exact-active-class="text-blue-500"
              >
                Contact Me
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Scoped styles can be left empty if you're using Tailwind utilities */
  </style>
  