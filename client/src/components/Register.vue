<template>
    <div class="register-screen">
        <h2>Register</h2>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>
  
<script>
export default {
    name: "Register",
    data() {
        return {
            username: "",
            email: "",
            password: ""
        };
    },
    methods: {
        register() {
            // Perform registration logic
            // You can use the username, email, and password values to create a new user
            // Handle the registration success and failure scenarios
            // Redirect the user or display an error message accordingly
            console.log("Register clicked");
        }
    }
};
</script>
  
<style scoped>
.register-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
}

h2 {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 10px;
}

input {
    width: 200px;
    padding: 5px;
}

button[type="submit"] {
    padding: 5px 10px;
    background-color: #3490dc;
    color: white;
    border: none;
    cursor: pointer;
}
</style>
  