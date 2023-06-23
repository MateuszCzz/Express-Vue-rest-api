<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

const castles = ref([]);
const isLoading = ref(false);
const error = ref(null);
const store = useStore(); 

const user = store.getters.getUserId;

onMounted(async () => {
  isLoading.value = true;
  console.log("im here");
  try {
    const response = await axios.get('http://localhost:3000/castles');
    castles.value = response.data;

    const userId = store.getters.getUserId;
    console.log("Current User ID:", userId);

    const likesResponse = await axios.get('http://localhost:3000/likes/user', {
      params: { user: userId }
    });
    const likes = likesResponse.data;
    console.log("Likes:", likes);

    castles.value.forEach((castle) => {
      const isLiked = likes.some((like) => {
        const isMatch = like.castle === castle._id && like.user === userId;
        console.log("Comparing:", like.castle, castle._id, like.user, userId, "Result:", isMatch);
        return isMatch;
      });
      castle.liked = isLiked;
      console.log("Castle ID:", castle._id, "Liked:", castle.liked);
    });
  } catch (error) {
    console.error(error);
    error.value = error.message || 'Something went wrong.';
  } finally {
    isLoading.value = false;
  }
});


const likeCastle = async (castleId) => {
  try {
    
    console.log('Sending like request with data:', { user, castle: castleId });

    await axios.post('http://localhost:3000/likes', { user, castle: castleId });

    const castle = castles.value.find((c) => c._id === castleId);
    if (castle) {
      castle.liked = true;
    }
  } catch (error) {
    console.error(error);
  }
};



const unlikeCastle = async (castleId) => {
  try {
    const userId = store.getters.getUserId;
    console.log('Sending unlike request with data:', { castle: castleId, user: userId });

    await axios.delete(`http://localhost:3000/likes`, {
      data: { id: castleId, user: userId, castle: castleId }
    });

    const castle = castles.value.find((c) => c._id === castleId);
    if (castle) {
      castle.liked = false;
    }
  } catch (error) {
    console.error(error);
  }
};



const hideImage = (event) => {
  event.target.style.display = 'none';
};


const deleteCastle = async (castleId) => {
  try {
    await axios.delete(`http://localhost:3000/castles/${castleId}`);
    castles.value = castles.value.filter((castle) => castle._id !== castleId);
  } catch (error) {
    console.error(error);
  }
};

</script>

<template>
    <div>
      <h2 class="font-extrabold text-6xl mt-12 mb-12 text-gray-800 dark:text-gray-200">Witaj w gronie Miłośnicy_Zamków.PL</h2>
  
      <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <router-link to="/create" class="text-blue-500 underline">Create New Castle</router-link>
          </div>
  
          <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <template v-if="isLoading">
              <p>Loading...</p>
            </template>
            <template v-else-if="error">
              <p>Something went wrong.</p>
            </template>
            <template v-else>
              <div v-for="castle in castles" :key="castle._id">
                <h3 class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-black bg-yellow-200 last:mr-0 mr-1">{{ castle.name }}</h3><br/><br/>
                <p class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-black bg-yellow-200 last:mr-0 mr-1">{{ castle.description }}</p><br/>
                  
                <img :src="castle.image" alt="Castle Image" @error="hideImage" class="shadow-lg rounded max-w-full h-auto max-h-80 align-middle border-none">
                  
                <p class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-black bg-yellow-200 last:mr-0 mr-1">{{ castle.yearBuilt }}</p>
                <p class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-black bg-yellow-200 last:mr-0 mr-1">{{ castle.architecturalStyle }}</p>
                <p class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-black bg-yellow-200 last:mr-0 mr-1">{{ castle.openingHours }}</p>
                <p class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-black bg-yellow-200 last:mr-0 mr-1">{{ castle.admissionFee }}</p>
                <br/><br/><br/>
                <button v-if="!castle.liked" @click="likeCastle(castle._id)" class="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-heart"></i> Like
                </button>
                <button v-else @click="unlikeCastle(castle._id)" class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-heart"></i> Unlike
                </button>
                <hr class="my-4 border-t-2 border-gray-200">
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </template>
  