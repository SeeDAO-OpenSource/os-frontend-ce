<template>
    <div>
      <h1>Create a Task</h1>
      <form @submit="createTask">
        <div>
          <label for="name">Name:</label>
          <input id="name" v-model="task.name" required>
        </div>
        <div>
          <label for="description">Description:</label>
          <input id="description" v-model="task.description" required>
        </div>
        <div>
          <label for="type">Type:</label>
          <input id="type" v-model="task.type" required>
        </div>
        <div>
          <label for="status">Status:</label>
          <input id="status" v-model="task.status" required>
        </div>
        <div>
          <label for="assigned_to">Assigned To:</label>
          <input id="assigned_to" v-model="task.assigned_to" required>
        </div>
        <div>
          <label for="creator">Creator:</label>
          <input id="creator" v-model="task.creator" required>
        </div>
        <div>
          <label for="reviewer">Reviewer:</label>
          <input id="reviewer" v-model="task.reviewer" required>
        </div>
        <div>
          <label for="evaluation">Evaluation:</label>
          <input id="evaluation" v-model="task.evaluation" required>
        </div>
        <div>
          <label for="subtasks">Subtasks:</label>
          <input id="subtasks" v-model="task.subtasks" placeholder="Separate multiple subtasks with a comma">
        </div>
        <div>
          <label for="links">Links:</label>
          <input id="links" v-model="task.links" placeholder="Separate multiple links with a comma">
        </div>
        <div>
          <label for="rewards">Rewards:</label>
          <input id="rewards" v-model="task.rewards" placeholder="Separate multiple rewards with a comma">
        </div>
        <div>
          <button type="submit">Create Task</button>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import { Configuration, TasksApi, TaskCreateInput } from 'daoly-client-sdk';
  import serverConfig from '@/config/server.ts';
  
  export default {
    name: 'TaskCreate',
    setup() {
      const task = ref<TaskCreateInput>({
        name: '',
        description: '',
        type: '',
        status: '',
        assigned_to: '',
        subtasks: '',
        creator: '',
        reviewer: '',
        evaluation: '',
        links: '',
        rewards: '',
      });
  
      const createTask = async (event: Event) => {
        event.preventDefault();
  
        const tasksApi = new TasksApi(new Configuration({ 
          basePath: serverConfig.axios.baseURL 
        }));
  
        try {
          const response = await tasksApi.taskControllerCreate({
            ...task.value,
            subtasks: task.value.subtasks.split(',').map(item => item.trim()),
            links: task.value.links.split(',').map(item => item.trim()),
            rewards: task.value.rewards.split(',').map(item => item.trim()),
          });
  
          alert('Task created successfully!');
          
          task.value = {
            name: '',
            description: '',
            type: '',
            status: '',
            assigned_to: '',
            subtasks: '',
            creator: '',
            reviewer: '',
            evaluation: '',
            links: '',
            rewards: '',
          };
        } catch (error) {
          console.error('Error creating task:', error);
        }
      };
  
      return {
        task,
        createTask
      };
    }
  };
  </script>
  