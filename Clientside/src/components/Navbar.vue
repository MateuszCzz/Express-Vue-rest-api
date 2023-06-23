<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 text-black bg-yellow-500 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
        <router-link class="text-xl subpixel-antialiased font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black" to="/">
          Miłośnicy Zamków
        </router-link>
      </div>
      <div class="lg:flex lg:flex-grow items-center ">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <template v-if="isAuthenticated">       
            <li class="nav-item">
              <button class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" @click="logout">Logout</button>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="/login" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">Register</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$store.dispatch('updateAuthentication', false);
      this.$router.push('/login');
    }
  }
};
</script>
