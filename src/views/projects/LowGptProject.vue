


<template>
  
  <v-row>
    <v-col cols="12" sm="12" lg="12" class="">
          <FirstClass></FirstClass>
  </v-col>
    <v-col cols="12" sm="12" lg="12">
      <BaseCard heading="优秀学员与作品展示">

        <v-expansion-panels fluid>
          <v-expansion-panel v-for="(attender, i) in attenders" :key="i" hide-actions>
            <v-expansion-panel-title>
              <v-row align="center" class="spacer" no-gutters>
                <v-col cols="4" sm="2" md="1">
                  <v-avatar size="36px">
                    <v-img v-if="attender.avator" alt="Avatar" :src="attender.avator"></v-img>
                    <!-- <v-icon v-else :color="attender.color" :icon="attender.icon"></v-icon> -->
                  </v-avatar>
                </v-col>

                <v-col class="hidden-xs-only text-left" cols="2"  sm="5" md="3">
                  <strong v-html="attender.name"></strong>
    
                </v-col>

                <!-- <v-col class="text-no-wrap text-left" cols="5" sm="3">
                  <v-chip v-if="attender.new" :color="`${attender.color}-lighten-1`" class="ml-0 mr-2 text-black" label
                    small>
                    {{ attender.new }} new
                  </v-chip>
                  <strong v-html="attender.status"></strong>
                </v-col> -->
                <v-col cols="2" sm="1" md="1">
                  <v-avatar size="36px" style="margin-left: -30px;">
                    <v-img v-if="attender.avator" alt="Avatar" 
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></v-img>
                  </v-avatar>
                </v-col>

                <v-col cols="5" sm="5" md="3">
                  <span v-if="attender.code" class="text-grey">
                    <a :href="attender.code" class="link-color" target="_blank"  style="z-index: 1000; position: relative; margin-right: 30px;">{{ attender.code }}</a>

                  </span>
                </v-col>
                <v-col cols="5" sm="5" md="3">
                <span v-if="attender.link" class="text-grey text-truncate hidden-sm-and-down">
                  <a :href="attender.link" class="link-color" target="_blank"  style="z-index: 1000; position: relative; margin-left: 20px;">{{ attender.link }}</a>
                </span>
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card-text class="text-subtitle-1" v-text="attender.description"></v-card-text>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- <v-pagination v-model="page" :length="4" rounded="circle" class="pa-3 mt-2"></v-pagination> -->
      </BaseCard>
    </v-col>
  </v-row>
</template>


<script setup lang="ts">

import { ref, computed } from 'vue'
import { Configuration, ProjectsApi, AttendersApi } from 'daoly-client-sdk'
import serverConfig from '@/config/server.ts'

import BaseCard from "@/components/BaseCard.vue"
import TheEarnings from "@/views/dashboards/dashboardComponents/analytical/earnings/TheEarnings.vue"
import FirstClass from "./low-gpt-summary/FirstClass.vue"
import WeeklyStats from "@/views/dashboards/dashboardComponents/analytical/weekly-stats/WeeklyStats.vue"


// const messages = ref([
//   {
//     avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
//     name: "John Leider",
//     title: "Welcome to Vuetify!",
//     excerpt: "Thank you for joining our community...",
//   },
//   {
//     color: "red",
//     icon: "mdi-account-multiple",
//     name: "Social",
//     new: 1,
//     total: 3,
//     title: "Twitter",
//   },
//   {
//     color: "teal",
//     icon: "mdi-tag",
//     name: "Promos",
//     new: 2,
//     total: 4,
//     title: "Shop your way",
//     exceprt: "New deals available, Join Today",
//   },
// ])

      const projects = ref([])
      const attenders = ref([])
      const search = ref("")
      const editedproject = ref(null)
      const page = ref(1)
      const radios = ref("radio-1")
      const breadcrumbs = ref([
      {
          text: "projects",
          disabled: false,
          href: "#",
      },
      {
          text: "My-projects",
          disabled: true,
          href: "#",
      },
      ])

      const lorem = ref(
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos."
      )

      const selected = ref([])


      const filteredList = computed(() => {
        if(search.value === "") return projects.value;
        return projects.value.filter((project: any) => project.name.toLowerCase().includes(search.value.toLowerCase()))
      })
  
      const loadProjects = async () => {
        const projectsApi = new ProjectsApi(new Configuration({ basePath: serverConfig.axios.baseURL }))
        try {
          const response = await projectsApi.projectControllerGetList()
          projects.value = response.data.items
        } catch (error) {
          console.error('Error loading projects:', error)
        }
      }

      const loadAttenders = async () => {
        const attendersApi = new AttendersApi(new Configuration({ basePath: serverConfig.axios.baseURL }))
        try {
          const response = await attendersApi.attenderControllerGetList()
          attenders.value = response.data.items
        } catch (error) {
          console.error('Error loading attenders:', error)
        }
      }
  
      const editItem = (project: any) => {
        // Add logic here to open a dialog for editing the project
        editedproject.value = project;
      }
  
      const deleteItem = (project: any) => {
        const index = projects.value.indexOf(project)
        confirm("Are you sure you want to delete this project?") && projects.value.splice(index, 1)
      }
  
      loadProjects()
      loadAttenders()
  
  
  
  </script>
  