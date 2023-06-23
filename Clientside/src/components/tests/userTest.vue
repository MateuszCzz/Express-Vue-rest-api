<template>
    <div id="app">
      <h1>Testing User Routes</h1>
  
      <!-- Button to create a user -->
      <button @click="createUser">Create User</button>
  
      <!-- Button to get a user by ID -->
      <button @click="getUserById">Get User by ID</button>
  
      <!-- Button to get all users -->
      <button @click="getAllUsers">Get All Users</button>
  
      <!-- Button to update a user by ID -->
      <button @click="updateUser">Update User</button>
  
      <!-- Button to delete a user by ID -->
      <button @click="deleteUser">Delete User</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    methods: {
      async createUser() {
        try {
          const userData = {
            name: 'User Name',
            email: 'user@example.com',
            password: 'password123',
            avatar: 'User Avatar URL'
          };
          const response = await axios.post('http://localhost:3000/users', userData);
          console.log('Create User Response:', response.data);
        } catch (error) {
          console.error('Create User Error:', error);
        }
      },
  
      async getUserById() {
        try {
          const userId = 'replace-with-user-id'; // Replace with an actual user ID
  
          const response = await axios.get(`http://localhost:3000/users/${userId}`);
          console.log('Get User by ID Response:', response.data);
        } catch (error) {
          console.error('Get User by ID Error:', error);
        }
      },
  
      async getAllUsers() {
        try {
          const response = await axios.get('http://localhost:3000/users');
          console.log('Get All Users Response:', response.data);
        } catch (error) {
          console.error('Get All Users Error:', error);
        }
      },
  
      async updateUser() {
        try {
          const userId = 'replace-with-user-id'; // Replace with an actual user ID
  
          const updatedUserData = {
            name: 'Updated User Name',
            // ... other updated user properties
          };
  
          const response = await axios.patch(`http://localhost:3000/users/${userId}`, updatedUserData);
          console.log('Update User Response:', response.data);
        } catch (error) {
          console.error('Update User Error:', error);
        }
      },
  
      async deleteUser() {
        try {
          const userId = 'replace-with-user-id'; // Replace with an actual user ID
  
          const response = await axios.delete(`http://localhost:3000/users/${userId}`);
          console.log('Delete User Response:', response.data);
        } catch (error) {
          console.error('Delete User Error:', error);
        }
      },
    },
  };
  </script>
  