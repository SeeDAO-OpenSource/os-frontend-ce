<template>
    <v-card>
      <v-card-text class="pa-5">
        <v-row>
          <v-col cols="12" lg="4" md="6">
            <v-text-field 
              density="compact" 
              v-model="search" 
              label="Search Tasks" 
              hide-details
              variant="outlined">
            </v-text-field>
          </v-col>
        </v-row>
        <v-table class="mt-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Creator</th>
              <th>Reviewer</th>
              <th>Evaluation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in tasks" :key="task.id">
              <td>{{ task.name }}</td>
              <td>{{ task.description }}</td>
              <td>{{ task.type }}</td>
              <td>{{ task.status }}</td>
              <td>{{ task.assigned_to }}</td>
              <td>{{ task.creator }}</td>
              <td>{{ task.reviewer }}</td>
              <td>{{ task.evaluation }}</td>
              <td>
                <v-icon small class="mr-2 text-info cursor-pointer" @click="editItem(task)" title="Edit">mdi-pencil</v-icon>
                <v-icon small class="text-error cursor-pointer" title="Delete" @click="deleteItem(task)">mdi-delete</v-icon>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { ref, computed } from 'vue'
  import { Configuration, TasksApi } from 'daoly-client-sdk'
  import serverConfig from '@/config/server.ts'
  
  export default {
    name: 'TaskList',
    setup() {
      const tasks = ref([])
      const search = ref("")
      const editedTask = ref(null)
  
      const filteredList = computed(() => {
        if(search.value === "") return tasks.value;
        return tasks.value.filter((task: any) => task.name.toLowerCase().includes(search.value.toLowerCase()))
      })
  
      const loadTasks = async () => {
        const tasksApi = new TasksApi(new Configuration({ basePath: serverConfig.axios.baseURL }))
        try {
          const response = await tasksApi.taskControllerGetList()
          tasks.value = response.data.items
        } catch (error) {
          console.error('Error loading tasks:', error)
        }
      }
  
      const editItem = (task: any) => {
        // Add logic here to open a dialog for editing the task
        editedTask.value = task;
      }
  
      const deleteItem = (task: any) => {
        const index = tasks.value.indexOf(task)
        confirm("Are you sure you want to delete this task?") && tasks.value.splice(index, 1)
      }
  
      loadTasks()
  
      return {
        tasks,
        search,
        filteredList,
        editItem,
        deleteItem,
        editedTask
      }
    }
  }
  </script>
  