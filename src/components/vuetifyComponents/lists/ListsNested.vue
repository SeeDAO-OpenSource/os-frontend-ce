<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- ListsNested -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Using the <code>v-list-group</code> component you can create up to 2 levels in depth using the sub-group prop.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-list>
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-group
                    prepend-icon="mdi-account-circle"
                    value="true"
                >
                    <template v-slot:activator>
                    <v-list-item-title>Users</v-list-item-title>
                    </template>

                    <v-list-group
                    no-action
                    sub-group
                    value="true"
                    >
                    <template v-slot:activator>
                        <v-list-item-content>
                        <v-list-item-title>Admin</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="(admin, i) in admins"
                        :key="i"
                        link
                    >
                        <v-list-item-title v-text="admin[0]"></v-list-item-title>
                        <v-list-item-icon>
                        <v-icon v-text="admin[1]"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    </v-list-group>

                    <v-list-group
                    sub-group
                    no-action
                    >
                    <template v-slot:activator>
                        <v-list-item-content>
                        <v-list-item-title>Actions</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="(crud, i) in cruds"
                        :key="i"
                    >
                        <v-list-item-title v-text="crud[0]"></v-list-item-title>
                        <v-list-item-action>
                        <v-icon v-text="crud[1]"></v-icon>
                        </v-list-item-action>
                    </v-list-item>
                    </v-list-group>
                </v-list-group>
                </v-list>
        </div>
    </div>
</template>

<script>
export default {
  name: "ListsNested",

  data: () => ({
      admins: [
        ['Management', 'mdi-user'],
        ['Settings', 'mdi-settings'],
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
      ],
  })
};
</script>