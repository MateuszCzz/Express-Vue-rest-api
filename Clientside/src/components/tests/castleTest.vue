<template>
    <div id="app">
      <h1>Testing Castle Routes</h1>
  
      <!-- Button to create a castle -->
      <button @click="createCastle">Create Castle</button>
  
      <!-- Button to get a castle by ID -->
      <button @click="getCastleById">Get Castle by ID</button>
  
      <!-- Button to get all castles -->
      <button @click="getAllCastles">Get All Castles</button>
  
      <!-- Button to update a castle by ID -->
      <button @click="updateCastle">Update Castle</button>
  
      <!-- Button to delete a castle by ID -->
      <button @click="deleteCastle">Delete Castle</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    methods: {
        async createCastle() {
      try {
        const castleData = {
          name: 'Castle Name',
          location: 'Castle Location',
          description: 'Castle Description',
          image: 'Castle Image URL',
          yearBuilt: 2023,
          architecturalStyle: 'Castle Architectural Style',
          openingHours: 'Castle Opening Hours',
          admissionFee: 1099
        };
        const response = await axios.post('http://localhost:3000/castles', castleData);
        console.log('Create Castle Response:', response.data);
      } catch (error) {
        console.error('Create Castle Error:', error);
        }
      },
  
      async getCastleById() {
        try {
          const castleId = 'replace-with-castle-id'; // Replace with an actual castle ID
  
          const response = await axios.get(`http://localhost:3000/castles/${castleId}`);
          console.log('Get Castle by ID Response:', response.data);
        } catch (error) {
          console.error('Get Castle by ID Error:', error);
        }
      },
  
      async getAllCastles() {
        try {
          const response = await axios.get('http://localhost:3000/castles');
          console.log('Get All Castles Response:', response.data);
        } catch (error) {
          console.error('Get All Castles Error:', error);
        }
      },
  
      async updateCastle() {
        try {
          const castleId = 'replace-with-castle-id'; // Replace with an actual castle ID
  
          const updatedCastleData = {
            name: 'Updated Castle Name',
            // ... other updated castle properties
          };
  
          const response = await axios.patch(`http://localhost:3000/castles/${castleId}`, updatedCastleData);
          console.log('Update Castle Response:', response.data);
        } catch (error) {
          console.error('Update Castle Error:', error);
        }
      },
  
      async deleteCastle() {
        try {
          const castleId = 'replace-with-castle-id'; // Replace with an actual castle ID
  
          const response = await axios.delete(`http://localhost:3000/castles/${castleId}`);
          console.log('Delete Castle Response:', response.data);
        } catch (error) {
          console.error('Delete Castle Error:', error);
        }
      },
    },
  };
  </script>
  