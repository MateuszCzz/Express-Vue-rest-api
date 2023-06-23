<script setup>
import { ref } from 'vue';
import axios from 'axios';
import InputError from '../elements/InputError.vue';
import InputLabel from '../elements/InputLabel.vue';
import PrimaryButton from '../elements/PrimaryButton.vue';
import TextInput from '../elements/TextInput.vue';
import Checkbox from '../elements/Checkbox.vue';

const name = ref('');
const password = ref('');
const remember = ref(false);
const nameError = ref(null);
const passwordError = ref(null);

const submit = async () => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      name: name.value,
      password: password.value,
    });

    const { token } = response.data;
    localStorage.setItem('token', token);
    window.location.href = '/';
  } catch (error) {
    console.error('Login Error:', error);
    passwordError.value = error;
  }
};
</script>

<template>
  <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg max-h-fit" style="align-self: flex-start;">
    <form @submit.prevent="submit">
      <div>
        <InputLabel for="name" value="Name" />
        <TextInput
          id="name"
          type="text"
          class="mt-1 block w-full"
          v-model="name"
          required
          autofocus
          autocomplete="username"
        />
        <InputError class="mt-2" :message="nameError" />
      </div>

      <div class="mt-4">
        <InputLabel for="password" value="Password" />
        <TextInput
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="password"
          required
          autocomplete="current-password"
        />
        <InputError class="mt-2" :message="passwordError" />
      </div>

      <div class="block mt-4">
        <label class="flex items-center">
          <Checkbox name="remember" v-model:checked="remember" />
          <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
        </label>
      </div>

      <div class="flex items-center justify-end mt-4">
        <PrimaryButton class="ml-4">
          Log in
        </PrimaryButton>
      </div>
    </form>
  </div>
</template>
