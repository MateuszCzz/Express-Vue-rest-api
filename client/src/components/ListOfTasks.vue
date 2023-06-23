<template>
    <div class="container">
        <router-link to="/task" class="button-link">Create new task</router-link>
        <div class="tasks">
            <Task v-for="(task, index) in tasks" :key="task.id" :task="task" @delete="fetchTasks"/>
            <div v-if="error" class="error-message">{{ error }}</div>
        </div>
    </div>
</template>
<script >
import PostService from '../postService';
import TaskService from '../TaskService';
import Task from './Task.vue'

export default {
    name: "TheWelcome",
    data() {
        return {
            tasks: [],
            error: '',
        }
    },
    components: {
        Task
    },
    created() {
        this.showAll()
    },
    methods: {
        

        async showAll() {
            try {
                this.tasks = await TaskService.test();
                // console.log("dzial")
                // console.log(this.posts)
            } catch (err) {
                this.error = err.message
                console.log("error")
            }
        },
        async fetchTasks(){
            // this.tasks = []
            try {
                this.tasks = await TaskService.test();
                console.log("fetchuje")
                // console.log(this.posts)
            } catch (err) {
                this.error = err.message
                console.log("error")
            }
        }
    }
}

</script>


<style>
.button-link {
    /* Button styles */
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.25rem;
    text-decoration: none;
    cursor: pointer;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>


