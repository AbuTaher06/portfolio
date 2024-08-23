<template>
    <div class="about">
      <section class="about-me py-20 text-center">
        <h1 class="text-4xl font-bold">About Me</h1>
        <p class="mt-4 max-w-2xl mx-auto">
          I'm a web developer with a passion for creating beautiful and functional websites.
          With a background in design and development, I strive to build user-friendly experiences.
        </p>
      </section>
      <section class="my-journey py-20">
        <h2 class="text-3xl text-center">My Journey</h2>
        <ul class="mt-6 list-disc list-inside">
          <li>Started coding in high school.</li>
          <li>Graduated with a degree in Computer Science.</li>
          <li>Worked on various freelance projects.</li>
          <li>Currently seeking new opportunities.</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About',
  };
  </script>
  
  <style scoped>
  .about-me {
    background-color: #f9f9f9;
  }
  </style>
  