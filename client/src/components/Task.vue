<template>
  <div class="task-item" @click="showTaskDetail">
    <div class="task-content">
      <div class="task-text">
        <p class="task-title">{{ task.title }}</p>
        <p class="task-description">{{ task.description }}</p>
        <label class="task-checkbox">
          <input type="checkbox" v-model="task.completed" class="task-checkbox-input" />
          <!-- <span class="task-checkbox-custom"></span> -->
          <span class="task-checkbox-label">Completed</span>
        </label>
      </div>
      <router-link :to="`/update/${task._id}`" @click="updateTask" class="task-delete-btn task-update-btn">Update</router-link>
      <!-- <button class="task-delete-btn task-update-btn" @click="updateTask">Update</button> -->
      <button class="task-delete-btn" @click="deleteTask">Delete</button>
    </div>
  </div>
</template>
  
<script>
import TaskService from '../TaskService'
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showTaskDetail() {
      // todo trigger this on certain button or 
      // exlude somehow buttons for different function i.e delete

      // console.log(this.task);
    },

    async deleteTask() {
      try {
        await TaskService.deleteTask(this.task);
        this.$emit("delete");
      } catch (error) {
        console.log(error);
      }
    },

    updateTask(){
      // console.log(this.task.id)
    }
  },
};
</script>
  
<style>
.task-update-btn {
  margin-right: 5px;
}

.task-content {
  display: flex;
  align-items: center;
}

.task-text {
  flex-grow: 1;
}

.task-delete-btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.tasks {
  margin-top: 20px;
}

.task-item {
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.task-title {
  font-weight: bold;
}

.task-checkbox {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.task-checkbox-input {
  margin-right: 10px;
}

.task-checkbox-custom {
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: inline-block;
  position: relative;
}

.task-checkbox-custom:before {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2196F3;
  opacity: 0;
  transition: opacity 0.2s;
}

.task-checkbox-input:checked+.task-checkbox-custom:before {
  opacity: 1;
}

.task-checkbox-label {
  font-size: 14px;
}
</style>
  