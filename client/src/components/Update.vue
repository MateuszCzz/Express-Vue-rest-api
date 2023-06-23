<template>
    <div class="update-task">
        <h2>Update Task</h2>
        <form @submit.prevent="updateTask">
            <!-- Input fields for updating a task -->
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="task.title" required>
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <textarea id="description" v-model="task.description" required></textarea>
            </div>
            
            <button type="submit">Update</button>
        </form>
    </div>
</template>
  
<script>
import TaskService from '../TaskService';

export default {
    name: "UpdateTask",
    props: {
        taskId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            task: {
                id: "",
                title: "",
                description: ""
            }
            
        };
    },
    async mounted() {
        // Initialize the input fields with the values of the clicked task

        // this.title = this.task.title;
        // this.description = this.task.description;
        console.log(this.taskId)
        try {
            const task = await TaskService.getOne(this.taskId)
            this.task.id = task._id
            this.task.title = task.title
            this.task.description = task.description
        } catch (err) {
            console.log(err)
        }
    },
    methods: {
        async updateTask() {
            // Perform update task logic
            // Use the title and description values to update the task
            // Handle the update task success and failure scenarios
            // Redirect the user or display an error message accordingly
            console.log("Update task clicked");
            // try{
            //     // TaskService.updateTask()
            // }
            try{
                
                await TaskService.updateTask(this.task)
            }catch(err){
                console.log(err)
            }
        }
    }
};
</script>
  

<style scoped>
.update-task {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
}

.update-task h2 {
    margin-top: 1rem;
}

.update-task label {
    margin-top: 1rem;
}

.update-task input,
.update-task textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.update-task button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.update-task button:hover {
    background-color: #0056b3;
}
</style>





  