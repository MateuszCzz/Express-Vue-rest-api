<template>
    <div class="login-screen">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
  
<script>
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        login() {
            // Perform login logic
            // You can use the username and password values for authentication
            // Handle the login success and failure scenarios
            // Redirect the user or display an error message accordingly
            console.log("Login clicked");
        }
    }
};
</script>
  
<style scoped>
.login-screen {
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
  