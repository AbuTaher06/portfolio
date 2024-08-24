<template>
  <div class="about">
    <section class="about-me py-20 px-4 sm:px-12 text-center text-white bg-indigo-500">
      <h1 class="text-4xl font-bold">About Me</h1>
      <p class="mt-4 max-w-2xl mx-auto text-lg">
        I am a PHP Laravel and Vue.js developer, currently studying at Jatiya Kabi Kazi Nazrul Islam University, pursuing a BSc in Computer Science and Engineering.
      </p>
      <p class="mt-4 max-w-2xl mx-auto text-lg">
        I have a passion for creating beautiful and functional websites that provide great user experiences. I am always eager to learn new technologies and improve my skills.
      </p>
    </section>
    
    <section class="my-journey py-20 px-4 sm:px-12 bg-orange-600">
      <h2 class="text-3xl text-center">My Journey</h2>
      <ul class="mt-6 list-disc list-inside max-w-2xl mx-auto text-lg">
        <li>Started coding in high school.</li>
        <li>Graduated with a degree in Computer Science.</li>
        <li>Worked on various freelance projects.</li>
        <li>Currently seeking new opportunities.</li>
        <li>Participated in hackathons and coding competitions.</li>
      </ul>
    </section>

    <section class="skills py-20 px-4 sm:px-12 bg-gray-100 text-center">
      <h2 class="text-3xl">My Skills</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="font-bold">PHP</h3>
          <p>Experienced in building robust applications using PHP and Laravel.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="font-bold">Vue.js</h3>
          <p>Skilled in creating dynamic user interfaces with Vue.js.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="font-bold">JavaScript</h3>
          <p>Proficient in JavaScript, with a focus on ES6+ features.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="font-bold">HTML & CSS</h3>
          <p>Strong foundation in HTML5 and CSS3 for responsive design.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="font-bold">Git & Version Control</h3>
          <p>Familiar with Git for version control and collaboration.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="font-bold">Database Management</h3>
          <p>Experience with MySQL and MongoDB for data storage.</p>
        </div>
      </div>
    </section>

    <section class="interests py-20 px-4 sm:px-12 bg-lime-300">
      <h2 class="text-3xl text-center">My Interests</h2>
      <p class="mt-4 max-w-2xl mx-auto text-lg">
        In addition to coding, I enjoy exploring new technologies, participating in tech meetups, and contributing to open-source projects. I also love photography and traveling, which inspire my creativity.
      </p>
    </section>

    <section class="contact py-20 px-4 sm:px-12 bg-black text-center text-yellow-300">
      <h2 class="text-3xl">Get in Touch</h2>
      <p class="mt-4 max-w-2xl mx-auto text-lg">
        I’m always open to discussing new projects or opportunities. Feel free to reach out!
      </p>
      <a href="mailto:abutahercse3255@gmail.com" class="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded">Contact Me</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
