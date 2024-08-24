<<<<<<< HEAD
=======

>>>>>>> 5893d573301aadaf938c78f3385e11ebdd4554af
<template>
    <div class="project-detail">
        
        <h1 class="text-4xl text-center">{{ project.title }}</h1>
        <p class="mt-4 text-lg text-center">{{ project.description }}</p>
        <section class="py-10 px-6 bg-gray-100">
        <h2 class="mt-8 text-2xl">Sections</h2>
        <ul class="mt-4">
          <li v-for="section in project.sections" :key="section" class="text-lg">
            {{ section }}
          </li>
        </ul>
    </section>
        <section class="py-10 px-6 bg-green-300">
        <h2 class="mt-8 text-2xl">Images</h2>
        <div class="image-gallery mt-4">
          <div v-for="image in project.images" :key="image" class="inline-block mr-4">
            <img :src="image" alt="Project Image" class="w-64 h-64 object-cover rounded" />
          </div>
        </div>
    </section>
        <section class="py-10 px-6 bg-orange-200">
        <h2 class="mt-8 text-2xl">Videos</h2>
        <div class="video-gallery mt-4">
          <div v-for="video in project.videos" :key="video" class="inline-block mr-4">
            <video controls class="w-32 h-32">
              <source :src="video" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
  
        <router-link to="/projects" class="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          Back to Projects
        </router-link>
      </section>
    </div>
  </template>
  
  
  <script>
  import homeImage from '@/assets/images/home.png';
import galleryImage from '@/assets/images/gallery.png';
import workshopImage from '@/assets/images/workshop.png';
  export default {
    name: 'ProjectDetail',
    data() {
      return {
        projects: [
          {
            id: '1',
            title: 'Anti Sexual Harassment Cell',
            description: 'A platform dedicated to addressing and reporting incidents of sexual harassment, providing resources and support for victims.',
            sections: ['Overview', 'Features', 'Impact'],
            images: [
              homeImage,
              galleryImage,
              workshopImage
             
            ],
            videos: [
              'https://via.placeholder.com/150',
            ]
          },
          {
            id: '2',
            title: 'Course Improvement Management System',
            description: 'A system designed to gather feedback on courses and facilitate improvements based on student and faculty input.',
            sections: ['Overview', 'Feedback Process', 'Improvements'],
          },
          {
            id: '3',
            title: 'Hospital Management System',
            description: 'A comprehensive solution for managing hospital operations, including patient records, appointments, and billing.',
            sections: ['Overview', 'Modules', 'User Roles'],
          },
          {
            id: '4',
            title: 'CircleHub',
            description: 'A social networking platform that connects users with shared interests and facilitates community building.',
            sections: ['Overview', 'Features', 'Community Guidelines'],
          },
          {
            id: '5',
            title: 'Laravel Blog Website',
            description: 'A personal blogging platform where users can share their thoughts, experiences, and expertise on various topics.',
            sections: ['Overview', 'User Management', 'Content Creation'],
          },
          {
            id: '6',
            title: 'Personal Portfolio',
            description: 'A showcase of my work, skills, and experiences, designed to highlight my professional journey and projects.',
            sections: ['Overview', 'Projects', 'Contact Information'],
          },
          {
            id: '7',
            title: 'JobSprout',
            description: 'A job portal that connects employers with potential candidates, featuring job listings and application management.',
            sections: ['Overview', 'Job Listings', 'Application Process'],
          },
          {
            id: '8',
            title: 'Friends Supershop',
            description: 'An online shopping platform offering a wide range of products, aimed at providing a convenient shopping experience.',
            sections: ['Overview', 'Product Categories', 'User Reviews'],
          },
          {
            id: '9',
            title: 'Laravel Vue Ecommerce',
            description: 'An e-commerce application built using Laravel and Vue.js, focusing on a seamless shopping and checkout experience.',
            sections: ['Overview', 'Shopping Cart', 'Payment Gateway'],
          },
        ],
        project: {},
      };
    },
    created() {
      const projectId = this.$route.params.id;
      this.project = this.projects.find(p => p.id === projectId) || {};
    },
  };
  </script>
  
  <style scoped>
  .image-gallery {
    display: flex;
    flex-direction: row; /* Align images in a row */
    justify-content: center; /* Center the images horizontally */
  }
  .project-detail {
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 8px;
  }
  </style>
<<<<<<< HEAD
  
=======
  
>>>>>>> 5893d573301aadaf938c78f3385e11ebdd4554af
