<template>
  <div id="app">
    <h1>Testing Like Routes</h1>

    <!-- Button to create a like -->
    <button @click="createLike">Create Like</button>

    <!-- Button to get all likes for a user -->
    <button @click="getAllLikesForUser">Get All Likes for User</button>

    <!-- Button to get all likes for a castle -->
    <button @click="getAllLikesForCastle">Get All Likes for Castle</button>

    <!-- Button to update a like by ID -->
    <button @click="updateLike">Update Like</button>

    <!-- Button to delete a like by ID -->
    <button @click="deleteLike">Delete Like</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async createLike() {
      try {
        const likeData = {
          castle: 'replace-with-castle-id', // Replace with an actual castle ID
          user: 'replace-with-user-id' // Replace with an actual user ID
        };
        const response = await axios.post('http://localhost:3000/likes', likeData);
        console.log('Create Like Response:', response.data);
      } catch (error) {
        console.error('Create Like Error:', error);
      }
    },

    async getAllLikesForUser() {
      try {
        const userId = 'replace-with-user-id'; // Replace with an actual user ID

        const response = await axios.get(`http://localhost:3000/likes/user/${userId}`);
        console.log('Get All Likes for User Response:', response.data);
      } catch (error) {
        console.error('Get All Likes for User Error:', error);
      }
    },

    async getAllLikesForCastle() {
      try {
        const castleId = 'replace-with-castle-id'; // Replace with an actual castle ID

        const response = await axios.get(`http://localhost:3000/likes/castle/${castleId}`);
        console.log('Get All Likes for Castle Response:', response.data);
      } catch (error) {
        console.error('Get All Likes for Castle Error:', error);
      }
    },

    async updateLike() {
      try {
        const likeId = 'replace-with-like-id'; // Replace with an actual like ID

        const updatedLikeData = {
          castle: 'replace-with-castle-id', // Replace with an actual castle ID
          user: 'replace-with-user-id' // Replace with an actual user ID
        };

        const response = await axios.patch(`http://localhost:3000/likes/${likeId}`, updatedLikeData);
        console.log('Update Like Response:', response.data);
      } catch (error) {
        console.error('Update Like Error:', error);
      }
    },

    async deleteLike() {
      try {
        const likeId = 'replace-with-like-id'; // Replace with an actual like ID

        const response = await axios.delete(`http://localhost:3000/likes/${likeId}`);
        console.log('Delete Like Response:', response.data);
      } catch (error) {
        console.error('Delete Like Error:', error);
      }
    },
  },
};
</script>
