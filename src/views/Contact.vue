<template>
  <div class="contact">
    <section class="contact-form py-20 px-4">
      <h1 class="text-4xl text-center font-bold text-gray-800">Contact Me</h1>
      <p class="text-center text-gray-600 mb-8">I'd love to hear from you! Please fill out the form below.</p>
      <form @submit.prevent="sendEmail" class="mt-8 max-w-lg mx-auto bg-white shadow-md rounded p-8">
        <div class="mb-4">
          <label for="name" class="block text-sm font-bold text-gray-700">Name</label>
          <input type="text" v-model="name" id="name" class="border border-gray-300 rounded w-full p-2" required />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-bold text-gray-700">Email</label>
          <input type="email" v-model="email" id="email" class="border border-gray-300 rounded w-full p-2" required />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-bold text-gray-700">Message</label>
          <textarea v-model="message" id="message" class="border border-gray-300 rounded w-full p-2" rows="5" required></textarea>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    async sendEmail() {
  const templateParams = {
    name: this.name,
    email: this.email,
    message: this.message,
  };

  try {
    await emailjs.send('service_1pon52g', 'template_kyr6mj4', templateParams, 'tuYXVfBnBWGymm0Uc');
    alert('Email sent successfully!');
    this.name = '';
    this.email = '';
    this.message = '';
  } catch (error) {
    console.error('Error:', error);
    alert(`An error occurred while sending the email: ${error.text}`);
  }
}

  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
