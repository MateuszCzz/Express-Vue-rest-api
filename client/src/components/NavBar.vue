<template>
    <nav class="navbar">
        <div class="navbar-left">
            <span class="navbar-name">To-Do Lister</span>
        </div>
        <div class="navbar-right">
            <template v-if="isAuthenticated">
                
                <button class="navbar-button" @click="logout">Logout</button>
            </template>
            <template v-else>
                <router-link to="/login" class="button-link navbar-button" @click="login">Login</router-link>
                <router-link to="/register" class="button-link navbar-button" @click="register">Register</router-link>
                <!-- <button class="navbar-button" @click="login">Login</button> -->
                <!-- <button class="navbar-button" @click="register">Register</button> -->
            </template>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: "Navbar",
    data() {
        return {
            isAuthenticated: false, // Set the initial authentication status
            name: "Your Name", // Set the initial name
        };
    },
    methods: {
        login() {
            // Handle login logic
            // Set isAuthenticated to true and update the name
            this.isAuthenticated = true;
        },
        logout() {
            // Handle logout logic
            // Set isAuthenticated to false and update the name
            this.isAuthenticated = false;
        },
        register() {
            // Handle register logic
        },
    },
};
</script>
  
<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
}

.navbar-left {
    margin-right: 10px;
}

.navbar-right {
    display: flex;
    align-items: center;
}

.navbar-name {
    font-weight: bold;
}

.navbar-button {
    margin-left: 5px;
}
</style>
  