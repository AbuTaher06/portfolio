<template>
  <div class="about">
    <section class="about-me py-20 px-4 sm:px-12 text-center text-white bg-indigo-500">
      <h1 class="text-4xl font-bold animate-fadeIn">About Me</h1>
      <p class="mt-4 max-w-2xl mx-auto text-lg animate-slideIn">
        I am a PHP Laravel and Vue.js developer, currently studying at Jatiya Kabi Kazi Nazrul Islam University, pursuing a BSc in Computer Science and Engineering.
      </p>
      <p class="mt-4 max-w-2xl mx-auto text-lg animate-slideIn">
        I have a passion for creating beautiful and functional websites that provide great user experiences. I am always eager to learn new technologies and improve my skills.
      </p>
      <a href="/src/assets/AbuTaher_CV_Latest.pdf" download class="mt-6 inline-block bg-yellow-400 text-white py-2 px-6 rounded hover:bg-yellow-500 transform hover:scale-105 transition duration-300">
        Download CV
      </a>
    </section>
    
    <section class="my-journey py-20 px-4 sm:px-12 bg-orange-600">
      <h2 class="text-3xl text-center animate-fadeIn">My Journey</h2>
      <ul class="mt-6 list-disc list-inside max-w-2xl mx-auto text-lg animate-slideIn">
        <li>Started coding in college.</li>
        <li>Graduated with a degree in Computer Science.</li>
        <li>Worked on various freelance projects.</li>
        <li>Currently seeking new opportunities.</li>
        <li>Participated in hackathons and coding competitions.</li>
      </ul>
    </section>
    <section class="skills py-20 px-4 sm:px-12 bg-gray-100 text-center">
      <h2 class="text-3xl animate-fadeIn">My Skills</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-100 animate-slideIn"
        >
          <h3 class="font-bold">{{ skill.name }}</h3>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </section>

    <section class="interests py-20 px-4 sm:px-12 bg-lime-300">
      <h2 class="text-3xl text-center animate-fadeIn">My Interests</h2>
      <p class="mt-4 max-w-2xl mx-auto text-lg animate-slideIn">
        In addition to coding, I enjoy exploring new technologies, participating in tech meetups, and contributing to open-source projects. I also love photography and traveling, which inspire my creativity.
      </p>
    </section>

    <section class="contact py-20 px-4 sm:px-12 bg-black text-center text-yellow-300">
      <h2 class="text-3xl animate-fadeIn">Get in Touch</h2>
      <p class="mt-4 max-w-2xl mx-auto text-lg animate-slideIn">
        I’m always open to discussing new projects or opportunities. Feel free to reach out!
      </p>
      <a href="mailto:abutahercse3255@gmail.com" class="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transform hover:scale-105 transition duration-300">Contact Me</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      skills: [
        { name: 'PHP', description: 'Experienced in building robust applications using PHP and Laravel.' },
        { name: 'Vue.js', description: 'Skilled in creating dynamic user interfaces with Vue.js.' },
        { name: 'JavaScript', description: 'Proficient in JavaScript, with a focus on ES6+ features.' },
        { name: 'HTML & CSS', description: 'Strong foundation in HTML5 and CSS3 for responsive design.' },
        { name: 'Git & Version Control', description: 'Familiar with Git for version control and collaboration.' },
        { name: 'Database Management', description: 'Experience with MySQL and MongoDB for data storage.' },
        { name: 'Laravel', description: 'Proficient in using Laravel for backend development and building RESTful APIs.' },
        { name: 'Python', description: 'Skilled in Python for scripting, automation, and backend development.' },
        { name: 'Machine Learning', description: 'Hands-on experience with Machine Learning techniques and frameworks like TensorFlow and scikit-learn.' },
      ],
    };
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}

.animate-slideIn {
  animation: slideIn 0.5s ease forwards;
}


.skill-card {
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.skill-card:hover {
  transform: scale(1.05); /* Zoom in */
  background-color: #fefcbf; /* Light yellow background */
}
.hover\:bg-yellow-100:hover {
  background-color: #fefcbf; /* Light yellow background */
}

.hover\:translate-y-1:hover {
  transform: translateY(-5px); /* Move up slightly */
}
</style>
