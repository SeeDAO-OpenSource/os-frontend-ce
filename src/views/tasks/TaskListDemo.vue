<template>
    <div>
      <h1>Task List</h1>
      <div v-for="task in tasks" :key="task.id">
        <h2>{{ task.name }}</h2>
        <p>{{ task.description }}</p>
        <p><strong>Type:</strong> {{ task.type }}</p>
        <p><strong>Status:</strong> {{ task.status }}</p>
        <p><strong>Assigned To:</strong> {{ task.assigned_to }}</p>
        <ul>
          <li v-for="(subtask, index) in task.subtasks" :key="index">{{ subtask }}</li>
        </ul>
        <p><strong>Creator:</strong> {{ task.creator }}</p>
        <p><strong>Reviewer:</strong> {{ task.reviewer }}</p>
        <p><strong>Evaluation:</strong> {{ task.evaluation }}</p>
        <ul>
          <li v-for="(link, index) in task.links" :key="index">{{ link }}</li>
        </ul>
        <ul>
          <li v-for="(reward, index) in task.rewards" :key="index">{{ reward }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue'
  import { Configuration, TasksApi } from 'daoly-client-sdk'
  import serverConfig from '@/config/server.ts'
  
  export default {
    name: 'TaskList',
    setup() {
      const tasks = ref([])
  
      const loadTasks = async () => {
        const tasksApi = new TasksApi(new Configuration({ 
          basePath: serverConfig.axios.baseURL 
        }))
  
        try {
          const response = await tasksApi.taskControllerGetList()
  
          // 根据返回的数据结构来获取任务列表
          tasks.value = response.data.items
        } catch (error) {
          console.error('Error loading tasks:', error)
        }
      }
  
      loadTasks()
  
      return {
        tasks
      }
    }
  }
  </script>
  