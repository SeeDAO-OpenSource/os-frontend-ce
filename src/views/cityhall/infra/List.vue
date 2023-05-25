<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import api from './api'
import { request } from '@/api';
import type { ToolDto } from 'daoly-client-sdk';
import { watch } from 'vue';
import { onMounted } from 'vue';

type FilterParam = {
  search?: string
}
const route = useRoute()

const filter = ref<FilterParam>({})
const infraType = ref<string>(route.params['type'] as string)
const data = ref<ToolDto[]>([])
const page = ref<{ page: number, limit: number, hasNext: boolean }>({ page: 1, limit: 10, hasNext: true })

const fetchData = async () => {
  const result = await request(() => api.toolControllerGetList(undefined, page.value.page, page.value.limit))
  data.value = result.items
}

watch(() => route.params.type, fetchData)
watch(page, fetchData)

onMounted(fetchData)

</script>

<template>
  <div>
    <v-card class="mb-7">
      <v-card-text class="pa-5">
        <v-row justify="space-between">
          <v-col cols="12" lg="4">
            <v-text-field v-model="filter.search" prepend-inner-icon="mdi-magnify" label="Search Contacts"
              variant="outlined" size="compact" hide-details></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" v-for="item in data">
          <v-card>
            <v-card-title>
              {{ item.name }}
            </v-card-title>
            <v-card-text>
              {{ item.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>