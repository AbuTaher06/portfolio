<template>
  <div class="projects">
    <section class="projects-list py-10 px-6">
      <h1 class="text-4xl text-center">My Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div
          class="project bg-white p-6 rounded shadow"
          v-for="project in projects"
          :key="project.id"
        >
          <h2 class="text-xl font-bold">{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <router-link :to="'/project/' + project.id" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
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
  data() {
    return {
      projects: [
        {
          id: '1',
          title: 'Anti Sexual Harassment Cell',
          description: 'A platform dedicated to addressing and reporting incidents of sexual harassment, providing resources and support for victims.',
        },
        {
          id: '2',
          title: 'Course Improvement Management System',
          description: 'A system designed to gather feedback on courses and facilitate improvements based on student and faculty input.',
        },
        {
          id: '3',
          title: 'Hospital Management System',
          description: 'A comprehensive solution for managing hospital operations, including patient records, appointments, and billing.',
        },
        {
          id: '4',
          title: 'CircleHub',
          description: 'A social networking platform that connects users with shared interests and facilitates community building.',
        },
        {
          id: '5',
          title: 'Laravel Blog Website',
          description: 'A personal blogging platform where users can share their thoughts, experiences, and expertise on various topics.',
        },
        {
          id: '6',
          title: 'Personal Portfolio',
          description: 'A showcase of my work, skills, and experiences, designed to highlight my professional journey and projects.',
        },
        {
          id: '7',
          title: 'JobSprout',
          description: 'A job portal that connects employers with potential candidates, featuring job listings and application management.',
        },
        {
          id: '8',
          title: 'Friends Supershop',
          description: 'An online shopping platform offering a wide range of products, aimed at providing a convenient shopping experience.',
        },
        {
          id: '9',
          title: 'Laravel Vue Ecommerce',
          description: 'An e-commerce application built using Laravel and Vue.js, focusing on a seamless shopping and checkout experience.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-list {
  background-color: #f1f1f1;
}
</style>
