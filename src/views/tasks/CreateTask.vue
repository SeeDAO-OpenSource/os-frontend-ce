<script setup lang="ts">
import { ref } from "vue";
import { Configuration, TasksApi, TaskCreateInput } from 'daoly-client-sdk';
import serverConfig from '@/config/server.ts';

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
</script>

<template>
  <v-card>
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title text-h6">Create a Task</h3>
    </v-card-text>
    <v-card-text>
      <v-text-field label="Name" v-model="task.name" filled></v-text-field>
      <v-text-field label="Description" v-model="task.description" filled></v-text-field>
      <v-text-field label="Type" v-model="task.type" filled></v-text-field>
      <v-text-field label="Status" v-model="task.status" filled></v-text-field>
      <v-text-field label="Assigned To" v-model="task.assigned_to" filled></v-text-field>
      <v-text-field label="Creator" v-model="task.creator" filled></v-text-field>
      <v-text-field label="Reviewer" v-model="task.reviewer" filled></v-text-field>
      <v-text-field label="Evaluation" v-model="task.evaluation" filled></v-text-field>
      <v-text-field label="Subtasks" v-model="task.subtasks" filled placeholder="Separate multiple subtasks with a comma"></v-text-field>
      <v-text-field label="Links" v-model="task.links" filled placeholder="Separate multiple links with a comma"></v-text-field>
      <v-text-field label="Rewards" v-model="task.rewards" filled placeholder="Separate multiple rewards with a comma"></v-text-field>
      <v-btn color="secondary" class="text-capitalize" @click="createTask">Create Task</v-btn>
    </v-card-text>
  </v-card>
</template>
