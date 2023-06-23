<script setup>
import { ref } from 'vue';
import axios from 'axios';
import InputError from '../elements/InputError.vue';
import InputLabel from '../elements/InputLabel.vue';
import PrimaryButton from '../elements/PrimaryButton.vue';
import TextInput from '../elements/TextInput.vue';

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const nameError = ref(null);
const emailError = ref(null);
const passwordError = ref(null);

const register = async () => {
  try {

    if (name.value.length < 8) {
      nameError.value = 'Name must be at least 8 characters long.';
      return;
    }
    if (password.value !== passwordConfirmation.value) {
      passwordError.value = 'Passwords do not match.';
      return;
    }
    if (password.value.length < 8 || !/[A-Z]/.test(password.value)) {
      passwordError.value =
        'Password must be at least 8 characters long and contain at least one uppercase letter.';
      return;
    }

    let users = [];

    try {
      const response = await axios.get('http://localhost:3000/users');
      users = response.data;
    } catch (error) {
      console.error('Fetch Users Error:', error);
      error.value = 'There was a problem with the connection. Please try again later.';
      return;
    }

    if (users.some(user => user.name === name.value)) {
      nameError.value = 'Name is already taken. Please choose a different name.';
      return;
    }

    const userData = {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    };

    const registrationResponse = await axios.post('http://localhost:3000/users', userData); 
    console.log('Registration Response:', registrationResponse.data);

    if (registrationResponse.status === 200) {
      window.location.href = '/login'; 
    }
  } catch (error) {
    console.error('Registration Error:', error);
  }
};
</script>

<template>

<div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg" style="align-self: flex-start; ">
    <form @submit.prevent="register">
      <div>
        <InputLabel for="name" value="Name" />

        <TextInput
          id="name"
          type="text"
          class="mt-1 block w-full"
          v-model="name"
          required
          autofocus
          autocomplete="name"
        />

        <InputError class="mt-2" :message="nameError" />
      </div>

      <div class="mt-4">
        <InputLabel for="email" value="Email" />

        <TextInput
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="email"
          required
          autocomplete="username"
        />

        <InputError class="mt-2" :message="emailError" />
      </div>

      <div class="mt-4">
        <InputLabel for="password" value="Password" />

        <TextInput
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="password"
          required
          autocomplete="new-password"
        />

        <InputError class="mt-2" :message="passwordError" />
      </div>

      <div class="mt-4">
        <InputLabel for="password_confirmation" value="Confirm Password" />

        <TextInput
          id="password_confirmation"
          type="password"
          class="mt-1 block w-full"
          v-model="passwordConfirmation"
          required
          autocomplete="new-password"
        />

        <InputError class="mt-2" :message="passwordError" />
      </div>

      <div class="flex items-center justify-end mt-4">
        <a
        href="/login"
        class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
        Already registered?
      </a>

        <PrimaryButton class="ml-4" type="submit">
          Register
        </PrimaryButton>
      </div>
    </form>
  </div>
</template>
