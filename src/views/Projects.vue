<template>
  <div class="projects">
    <section v-if="!selectedProject" class="projects-list py-10 px-6">
      <h1 class="text-4xl text-center">My Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div
          class="project bg-white p-6 rounded shadow"
          v-for="project in projects"
          :key="project.id"
        >
          <h2 class="text-xl font-bold">{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <button @click="viewDetails(project)" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
            View Details
          </button>
        </div>
      </div>
    </section>

    <!-- Project Detail Section -->
    <section v-else class="project-detail">
      <h1 class="text-4xl text-center">{{ selectedProject.title }}</h1>
      <p class="mt-4 text-lg text-center">{{ selectedProject.description }}</p>
      <section class="py-10 px-6 bg-gray-100">
        <h2 class="mt-8 text-2xl">Sections</h2>
        <ul class="mt-4">
          <li v-for="section in selectedProject.sections" :key="section" class="text-lg">
            {{ section }}
          </li>
        </ul>
      </section>
      <h2 class="mt-8 text-2xl text-center bg-blue-600 text-yellow">Images</h2>
      <section class="py-10 px-6 bg-black">
       
        <div class="image-gallery mt-4 flex flex-wrap">
          <div v-for="image in selectedProject.images" :key="image" class="w-1/2 p-2">
            <img :src="image" alt="Project Image" class="w-full max-h-64 object-cover rounded" />
          </div>
        </div>
      </section>
      
      <h2 class="mt-8 text-2xl text-center bg-blue-600 text-yellow">Videos</h2>
      <section class="py-10 px-6 bg-pink-300">
   
        <div class="video-gallery mt-4 flex flex-wrap">
          <div class="video-gallery mt-4 flex flex-wrap">
            <div v-for="video in selectedProject.videos" :key="video" class="w-1/2 p-2">
              <div v-html="video" class="w-full"></div>
            </div>
          </div>
        </div>
        
        <button @click="backToList" class="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          Back to Projects
        </button>
      </section>
      
    </section>
  </div>
</template>

<script>
import homeImage from '@/assets/images/home.png';
import galleryImage from '@/assets/images/gallery.png';
import workshopImage from '@/assets/images/workshop.png';
import HelpDesk from '@/assets/images/helpdesk.png';
import Faq from '@/assets/images/faq.png';
//import Video from '@/assets/videos/video.mp4';



export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: '1',
          title: 'Anti Sexual Harassment Cell',
          description: 'A platform dedicated to addressing and reporting incidents of sexual harassment, providing resources and support for victims.',
          sections: ['Overview', 'Features', 'Impact'],
          images: [homeImage, galleryImage, workshopImage, Faq, HelpDesk],
          videos: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/KQ6ZxbKJnKE?si=9YAmkwQwqF958Gvd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'],
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
        // Add other projects here...
      ],
      selectedProject: null,
    };
  },
  methods: {
    viewDetails(project) {
      this.selectedProject = project;
    },
    backToList() {
      this.selectedProject = null;
    },
    getEmbedUrl(videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
};
</script>

<style scoped>
.projects-list {
  background-color: #f1f1f1;
}
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
