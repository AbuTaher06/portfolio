<template>
    <div class="contact">
      <section class="contact-form py-20 px-4">
        <h1 class="text-4xl text-center">Contact Me</h1>
        <form class="mt-8 max-w-lg mx-auto">
          <div class="mb-4">
            <label for="name" class="block text-sm font-bold">Name</label>
            <input type="text" id="name" class="border rounded w-full p-2" required />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-bold">Email</label>
            <input type="email" id="email" class="border rounded w-full p-2" required />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-bold">Message</label>
            <textarea id="message" class="border rounded w-full p-2" rows="5" required></textarea>
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
  };
  </script>
  
  <style scoped>
  .contact-form {
    background-color: #eaeaea;
  }
  </style>
  