<script setup lang="ts">
import { ref } from 'vue';
import { roleApi } from '../../api';
import { request } from '@/api';
import type { RoleDto } from 'daoly-client-sdk';
import { onMounted } from 'vue';
import RoleEditDialog from './RoleEditDialog.vue';


const roles = ref<RoleDto[]>([])
const showRoleDialog = ref<boolean>(false)

const loadRoles = async () => {
  const data = await request(() => roleApi.roleControllerGetList({
    page: 1, limit: 10000,
  }))
  roles.value = data.items
}

const handleCreateRole = async () => {
  showRoleDialog.value = true
}

onMounted(async () => {
  await loadRoles()
})

</script>

<template>
  <v-container>
    <v-row>身份与权限</v-row>
    <v-row>
      <v-col>
        <v-card height="">
          <v-card-title>
            <v-btn variant="flat">Create
              <v-dialog v-model="showRoleDialog" activator="parent">
                <role-edit-dialog></role-edit-dialog>
              </v-dialog>
            </v-btn>

            <v-input> efefef</v-input>
          </v-card-title>
          <v-card-text>
            <v-row>
              <div v-for="r in roles" v-if="roles.length > 0">
                {{ r.name }}
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="flex-1">
        <v-card>
          111
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
