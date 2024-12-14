<template>
  <div class="projects">
    <!-- Project List Section -->
    <section v-if="!selectedProject" class="projects-list py-10 px-6">
      <h1 class="text-4xl text-center font-bold text-black-600">My Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div
          class="project bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          v-for="project in projects"
          :key="project.id"
        >
          <h2 class="text-xl font-bold text-black-500">{{ project.title }}</h2>
          <p class="text-gray-700">{{ project.description }}</p>
          <p class="text-gray-600 mt-2"><strong>Technology:</strong> {{ project.technology }}</p>
          <button
            @click="viewDetails(project)"
            class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-200 hover:bg-blue-600"
          >
            View Details
          </button>
        </div>
      </div>
    </section>

    <!-- Project Detail Section -->
    <section v-else class="project-detail bg-gray-50 py-10">
      <h1 class="text-4xl text-center font-bold text-blue-600">{{ selectedProject.title }}</h1>
      <p class="mt-4 text-lg text-center text-gray-800">{{ selectedProject.description }}</p>

      <!-- Links -->
      <div class="mt-6 text-center">
        <a
          v-if="selectedProject.liveLink"
          :href="selectedProject.liveLink"
          target="_blank"
          class="text-blue-500 underline mx-2"
        >
          Live Link
        </a>
        <a
          v-if="selectedProject.githubRepo"
          :href="selectedProject.githubRepo"
          target="_blank"
          class="text-blue-500 underline mx-2"
        >
          GitHub Repository
        </a>
      </div>
            <button
        @click="backToList"
        class="mt-6 inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105 hover:shadow-xl"
      > 
        Back to Projects
      </button>


      <!-- Overview Section -->
      <section class="py-10 px-6 bg-white rounded-lg shadow mt-6">
        <h2 class="mt-8 text-2xl font-bold text-blue-600">Overview</h2>
        <p class="mt-4 text-gray-800">{{ selectedProject.overviewDescription }}</p>
        <ul class="mt-4 list-disc pl-5 text-gray-700">
          <li v-for="point in selectedProject.overviewPoints" :key="point">{{ point }}</li>
        </ul>
      </section>

      <!-- Features Section -->
      <section class="py-10 px-6 bg-white rounded-lg shadow mt-6">
        <h2 class="mt-8 text-2xl font-bold text-blue-600">Features</h2>
        <ul class="mt-4 list-disc pl-5 text-gray-700">
          <li v-for="feature in selectedProject.features" :key="feature">{{ feature }}</li>
        </ul>
      </section>

      <!-- Impact Section -->
      <section class="py-10 px-6 bg-white rounded-lg shadow mt-6">
        <h2 class="mt-8 text-2xl font-bold text-blue-600">Impact</h2>
        <p class="mt-4 text-gray-800">{{ selectedProject.impact }}</p>
      </section>

      <!-- Image Gallery -->
      <h2 class="mt-8 text-2xl text-center bg-blue-600 text-white p-4">Images</h2>
      <section class="py-10 px-6 bg-gray-100">
        <div class="image-gallery mt-4 flex flex-wrap">
          <div
            v-for="image in selectedProject.images"
            :key="image"
            class="w-1/2 p-2"
          >
            <img
              :src="image"
              alt="Project Image"
              class="w-full max-h-64 object-cover rounded-lg shadow cursor-pointer transition-transform transform hover:scale-105"
              @click="openLightbox(image)"
            />
          </div>
        </div>
      </section>

      <!-- Lightbox Modal -->
      <div v-if="lightboxImage" class="lightbox" @click="closeLightbox">
        <img :src="lightboxImage" class="lightbox-image" />
      </div>

      <!-- Video Gallery -->
      <h2 class="mt-8 text-2xl text-center bg-blue-600 text-white p-4">Videos</h2>
      <section class="py-10 px-6 bg-pink-300">
        <div class="video-gallery mt-4 flex flex-wrap">
          <div v-for="video in selectedProject.videos" :key="video" class="w-1/2 p-2">
            <div v-html="video" class="w-full"></div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
// for shpc
import homeImage from '@/assets/images/shpc/home.png';
import galleryImage from '@/assets/images/shpc/gallery.png';
import workshopImage from '@/assets/images/shpc/workshop.png';
import HelpDesk from '@/assets/images/shpc/helpdesk.png';
import Faq from '@/assets/images/shpc/faq.png';

// for course improvement management system
import home from '@/assets/images/cims/home.png';
import student_home from '@/assets/images/cims/student/student_home.png';
import profile from '@/assets/images/cims/student/profile.png';
import dept_home from '@/assets/images/cims/dept/dept_home.png';
import exam_request from '@/assets/images/cims/dept/exam_request.png';
import pending_request from '@/assets/images/cims/dept/pending_request.png';
import selected from '@/assets/images/cims/dept/selected.png';

import examcontroller_home from '@/assets/images/cims/controller/examcontroller_home.png';
import requested from '@/assets/images/cims/controller/requested.png';


export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: '1',
          title: 'Anti-Sexual Harassment Cell',
          description: 'A platform dedicated to addressing and reporting incidents of sexual harassment.',
          technology: 'PHP, MySQL, JavaScript, Bootstrap',
          liveLink: 'https://shpc.jkkniu.edu.bd',
          githubRepo: 'https://github.com/yourusername/anti-harassment-cell',
          overviewDescription: 'Developed a secure platform for university students, teachers, and employees to confidentially report incidents of sexual harassment.',
          overviewPoints: [
            'Integrated OTP authentication, case tracking, and role-based access.',
            'Provided online mental support and assistance to victims.',
            'Designed a responsive UI for accessibility across devices.',
          ],
          features: [
            'Secure user authentication with OTP.',
            'Role-based access for students, faculty, and administrators.',
            'Integrated case tracking for ongoing reports.',
            'Online mental health support for victims.',
            'Mobile-friendly design for ease of use on all devices.',
          ],
          impact:
            'This platform has significantly improved the reporting and management of harassment cases within the university. It has empowered victims to come forward confidentially and facilitated faster resolution of issues while ensuring mental health support for affected individuals.',
          sections: ['Overview', 'Features', 'Impact'],
          images: [homeImage, galleryImage, workshopImage, Faq, HelpDesk],
          videos: [
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/KQ6ZxbKJnKE" frameborder="0" allowfullscreen></iframe>',
          ],
        },
        {
    id: '2',
    title: 'Course Improvement Management System',
    description: 'A system designed to gather feedback on courses and facilitate improvements based on student and faculty input.',
    technology: 'PHP, MySQL, JavaScript, Bootstrap',
    liveLink: 'https://example.com/course-improvement',
    githubRepo: 'https://github.com/yourusername/course-improvement',
    overviewDescription: 'Developed a system that collects feedback from students and faculty to improve course content and teaching methods.',
    overviewPoints: [
      'Implemented feedback forms for students and faculty to evaluate courses.',
      'Developed a reporting system for administrators to analyze feedback.',
      'Created a role-based access system for students, faculty, and admins.',
    ],
    features: [
      'User-friendly feedback collection forms for both students and faculty.',
      'Admin dashboard to view and analyze feedback reports.',
      'Role-based access for different types of users.',
      'Email notifications for administrators on new feedback submissions.',
    ],
    impact: 'The system has helped improve the quality of courses by providing actionable insights from students and faculty, leading to better teaching practices and course content.',
    sections: ['Overview', 'Feedback Process', 'Improvements'],
    images: [home, student_home, profile,dept_home,exam_request, pending_request, selected,examcontroller_home, requested], // Add images if available
    videos: [], // Add videos if available
  },
  {
    id: '3',
    title: 'Hospital Management System',
    description: 'A comprehensive solution for managing hospital operations, including patient records, appointments, and billing.',
    technology: 'Java, MySQL, Spring Boot, Angular',
    liveLink: 'https://example.com/hospital-management',
    githubRepo: 'https://github.com/yourusername/hospital-management',
    overviewDescription: 'Developed a system for hospitals to manage patient information, appointments, and billing processes efficiently.',
    overviewPoints: [
      'Created patient records management system.',
      'Implemented appointment scheduling for doctors and patients.',
      'Developed billing system for hospital charges and insurance claims.',
    ],
    features: [
      'Patient registration and records management.',
      'Appointment scheduling for doctors and patients.',
      'Billing and insurance claim management.',
      'Admin dashboard to monitor hospital operations.',
    ],
    impact: 'The system streamlined hospital operations, reduced manual errors, and improved patient experience by providing an efficient way to handle appointments, records, and billing.',
    sections: ['Overview', 'Modules', 'User Roles'],
    images: [], // Add images if available
    videos: [], // Add videos if available
  },
  {
    id: '4',
    title: 'CircleHub',
    description: 'A social networking platform that connects users with shared interests and facilitates community building.',
    technology: 'Vue.js, Firebase, Node.js, CSS',
    liveLink: 'https://example.com/circlehub',
    githubRepo: 'https://github.com/yourusername/circlehub',
    overviewDescription: 'Built a platform where users can connect, interact, and form communities based on shared interests.',
    overviewPoints: [
      'Implemented real-time messaging and notifications.',
      'Enabled users to create and join communities based on interests.',
      'Designed a clean, user-friendly interface for easy navigation.',
    ],
    features: [
      'User registration and profile management.',
      'Real-time messaging using Firebase.',
      'Community creation and management.',
      'Interactive feed for sharing posts and updates.',
    ],
    impact: 'The platform empowered users to connect with like-minded individuals, fostering a sense of belonging and facilitating community building around shared passions.',
    sections: ['Overview', 'Features', 'Community Guidelines'],
    images: [], // Add images if available
    videos: [], // Add videos if available
  },
  {
    id: '5',
    title: 'Laravel Blog Website',
    description: 'A personal blogging platform where users can share their thoughts, experiences, and expertise on various topics.',
    technology: 'Laravel, MySQL, Bootstrap',
    liveLink: 'https://example.com/laravel-blog',
    githubRepo: 'https://github.com/yourusername/laravel-blog',
    overviewDescription: 'Developed a blogging platform that allows users to create, manage, and share their blog posts.',
    overviewPoints: [
      'Implemented blog post creation, editing, and deletion features.',
      'Added user authentication for secure login and management.',
      'Created an admin panel for post moderation and user management.',
    ],
    features: [
      'User registration and login functionality.',
      'Post creation, editing, and management.',
      'Commenting and discussion functionality.',
      'Search and categorization of posts.',
    ],
    impact: 'This platform gave individuals the freedom to express their ideas, experiences, and expertise while fostering an engaged community of readers and contributors.',
    sections: ['Overview', 'User Management', 'Content Creation'],
    images: [], // Add images if available
    videos: [], // Add videos if available
  },
  {
    id: '6',
    title: 'Personal Portfolio',
    description: 'A showcase of my work, skills, and experiences, designed to highlight my professional journey and projects.',
    technology: 'Vue.js, CSS, JavaScript',
    liveLink: 'https://example.com/portfolio',
    githubRepo: 'https://github.com/yourusername/portfolio',
    overviewDescription: 'Created a personal portfolio website to highlight my skills, work experience, and projects.',
    overviewPoints: [
      'Developed a dynamic layout with smooth transitions and animations.',
      'Included sections for projects, skills, and contact information.',
      'Optimized for both desktop and mobile devices.',
    ],
    features: [
      'Project showcase with detailed descriptions and images.',
      'Interactive skill set section with progress bars.',
      'Contact form with email integration.',
      'Blog section for updates and personal insights.',
    ],
    impact: 'The portfolio served as a professional online presence, helping potential clients and employers learn more about my skills and past work.',
    sections: ['Overview', 'Projects', 'Contact Information'],
    images: [], // Add images if available
    videos: [], // Add videos if available
  },
  {
    id: '7',
    title: 'JobSprout',
    description: 'A job portal that connects employers with potential candidates, featuring job listings and application management.',
    technology: 'Laravel, MySQL, Vue.js',
    liveLink: 'https://example.com/jobsprout',
    githubRepo: 'https://github.com/yourusername/jobsprout',
    overviewDescription: 'Developed a job portal that connects employers with qualified candidates, featuring job listings and an easy-to-use application management system.',
    overviewPoints: [
      'Implemented user registration and profile management for both employers and job seekers.',
      'Created a job listing and application management system.',
      'Designed an intuitive search functionality for job seekers.',
    ],
    features: [
      'Job listings and search functionality.',
      'User profiles for job seekers and employers.',
      'Application submission and tracking system.',
      'Admin panel for managing job postings and applicants.',
    ],
    impact: 'JobSprout has helped employers find the right candidates faster and has provided job seekers with a streamlined process to apply to relevant jobs.',
    sections: ['Overview', 'Job Listings', 'Application Process'],
    images: [], // Add images if available
    videos: [], // Add videos if available
  },
  {
    id: '8',
    title: 'Friends Supershop',
    description: 'An online shopping platform offering a wide range of products, aimed at providing a convenient shopping experience.',
    technology: 'Laravel, Vue.js, MySQL',
    liveLink: 'https://example.com/friends-supershop',
    githubRepo: 'https://github.com/yourusername/friends-supershop',
    overviewDescription: 'Built an e-commerce platform for users to browse, purchase, and review a wide range of products.',
    overviewPoints: [
      'Implemented product catalog with categories and search functionality.',
      'Developed a shopping cart and checkout system.',
      'Added user review and rating system for products.',
    ],
    features: [
      'Product catalog with search and filtering options.',
      'Shopping cart and checkout functionality.',
      'User account and order history management.',
      'Product reviews and ratings system.',
    ],
    impact: 'The platform has enabled customers to easily shop online, providing them with a wide variety of products and a seamless shopping experience.',
    sections: ['Overview', 'Product Categories', 'User Reviews'],
    images: [], // Add images if available
    videos: [], // Add videos if available
  },
  {
    id: '9',
    title: 'Laravel Vue Ecommerce',
    description: 'An e-commerce application built using Laravel and Vue.js, focusing on a seamless shopping and checkout experience.',
    technology: 'Laravel, Vue.js, MySQL',
    liveLink: 'https://example.com/laravel-vue-ecommerce',
    githubRepo: 'https://github.com/yourusername/laravel-vue-ecommerce',
    overviewDescription: 'Developed an e-commerce platform combining the power of Laravel and Vue.js to provide a seamless and responsive shopping experience.',
    overviewPoints: [
      'Designed a real-time shopping cart and checkout system.',
      'Implemented an easy-to-use product browsing and filtering system.',
      'Integrated secure payment gateway for transactions.',
    ],
    features: [
      'Product catalog with filtering and sorting options.',
      'Responsive shopping cart and checkout process.',
      'Secure payment gateway integration.',
      'Order management for users and admins.',
    ],
    impact: 'The application has streamlined the e-commerce experience for users, offering a smooth and secure way to shop online and manage their orders.',
    sections: ['Overview', 'Shopping Cart', 'Payment Gateway'],
    images: [], // Add images if available
    videos: [], // Add videos if available
  }
        // Additional projects can be added here...
      ],
      selectedProject: null,
      lightboxImage: null,
    };
  },
  methods: {
    viewDetails(project) {
      this.selectedProject = project;
    },
    backToList() {
      this.selectedProject = null;
    },
    openLightbox(image) {
      this.lightboxImage = image;
    },
    closeLightbox() {
      this.lightboxImage = null;
    },
  },
};
</script>

<style scoped>
.projects-list {
  
  background-color: #f1f1f1;
  padding: 20px;
}
.image-gallery {
  display: flex;
  flex-wrap: wrap;
}
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.lightbox-image {
  max-width: 90%;
  max-height: 90%;
}
</style>