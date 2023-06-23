<template>
    <div>
      <h2>Create Task</h2>
      <form @submit.prevent="createTask" class="task-form">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" required>
        
        <label for="description">Description:</label>
        <textarea id="description" v-model="description" required></textarea>
        
        <label for="priority">Priority:</label>
        <select id="priority" v-model="priority" required>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
        
        <button type="submit">Create Task</button>
      </form>
    </div>
  </template>

<script>
import TaskService from '../TaskService';

export default {
  data() {
    return {
      title: '',
      description: '',
      priority: 'low' // Default priority set to 'low'
    };
  },
  methods: {
    createTask() {
      const task = {
        title: this.title,
        description: this.description,
        priority: this.priority
      }
      console.log("haha" + task.title)
      TaskService.createTask(task)
      
      // Reset the form fields after submitting
      this.title = '';
      this.description = '';
      this.priority = 'low'; // Reset priority to 'low'

      
    //   TaskService.createTask(task)


    }
  }
};
</script>

  
  <style scoped>
  .task-form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .task-form label {
    margin-top: 1rem;
  }
  
  .task-form input,
  .task-form textarea,
  .task-form select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .task-form button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .task-form button:hover {
    background-color: #0056b3;
  }
  </style>
  