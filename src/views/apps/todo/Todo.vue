<template>
  <v-container fluid>
    <!-- -------------------------------------------------------------------------------------
        Todo Room 
    --------------------------------------------------------------------------------------->
    <v-card>
      <BaseLeftRightPartVue>
        <!---/Left chat list -->
        <!-- -------------------------------------------------------------------------------------
        Left Room 
    --------------------------------------------------------------------------------------->
        <template v-slot:leftpart>
          <div class="pa-4">
            <h3 class="my-2 mb-4">Todo App</h3>

            <div class="d-flex align-center mt-6 mb-5">
              <div class="h4">Remaining Todo</div>
              <div class="ml-auto">
                <v-chip close color="error" label text-color="white">
                  {{ remainingTodos }}
                </v-chip>
              </div>
            </div>
            <div class="d-flex align-center">
              <div class="">Completed Todo</div>
              <div class="ml-auto">
                <v-chip close color="success" label text-color="white">
                  {{ completedTodos }}
                </v-chip>
              </div>
            </div>
          </div>
        </template>
        <!---/Right chat list -->
        <template v-slot:rightpart>
          <div class="pa-4">
            <v-btn @click.stop="dialog = true">Add Task</v-btn>
          </div>
          <v-divider></v-divider>
          <!-- -------------------------------------------------------------------------------------
            List todo
           --------------------------------------------------------------------------------------->
          <v-list>
            <perfect-scrollbar class="todoheight">
              <v-list-item
                v-for="(todo, index) in todos"
                :key="index"
                :value="todo.title"
              >
                <template v-slot:prepend>
                  <v-checkbox
                    v-model="todo.done"
                    :color="todo.done ? 'primary' : ''"
                    hide-details
                  ></v-checkbox>
                </template>
                <div
                  class="cursor-pointer"
                  @click="selectodo(index)"
                  style="width: 80%"
                >
                  {{ todo.title }}
                </div>
                <template v-slot:append>
                  <v-chip
                    small
                    label
                    class="ml-auto flex-shrink-0"
                    :color="todo.done ? 'green' : 'primary'"
                    >{{ todo.date }}</v-chip
                  >
                </template>
              </v-list-item>
            </perfect-scrollbar>
          </v-list>
        </template>
      </BaseLeftRightPartVue>
    </v-card>
    <!-- -------------------------------------------------------------------------------------
            Edit Task Drawer
    --------------------------------------------------------------------------------------->
    <v-navigation-drawer
      v-model="editTodo"
      temporary
      location="right"
      width="300"
    >
      <v-toolbar flat small>
        <v-toolbar-title> Edit Todo </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon color="error" @click="editTodo = false">
          <v-icon size="small">mdi-window-close</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- -------------------------------------------------------------------------------------
            Todo edit
    --------------------------------------------------------------------------------------->
      <v-list class="pa-2">
        <v-list-item-content v-if="selectedTodo" class="pt-0">
          <v-list-item-title>
            <v-checkbox
              v-model="selectedTodo.done"
              :color="selectedTodo.done ? 'primary' : ''"
              :label="
                selectedTodo.done ? 'Mark As In-Complete' : 'Mark As Complete'
              "
            >
            </v-checkbox>
            <div class="px-3">
              <v-text-field
                label="Task"
                variant="outlined"
                v-model="selectedTodo.title"
              ></v-text-field>
              <h2></h2>
              <v-textarea
                variant="outlined"
                name="input-7-4"
                label="Notes"
                rows="3"
                v-model="selectedTodo.notes"
              ></v-textarea>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ props }">
                  <v-text-field
                    v-model="selectedTodo.date"
                    variant="outlined"
                    label="Due Date"
                    v-bind="props"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="selectedTodo.date"
                  @input="menu2 = false"
                  :model-config="modelConfig"
                ></v-date-picker>
              </v-menu>

              <v-btn class="mr-2" color="success" @click="editTodo = false"
                >Save</v-btn
              >
              <v-btn color="error" @click="removeTodo(selectedTodo)"
                >Delete Task</v-btn
              >
            </div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list>
    </v-navigation-drawer>
    <!-- -------------------------------------------------------------------------------------
            Edit Task Drawer
    --------------------------------------------------------------------------------------->
    <!-- -------------------------------------------------------------------------------------
        Add Task Dialog
      --------------------------------------------------------------------------------------->
    <v-dialog v-model="dialog">
      <v-card>
        <div class="d-flex pa-2 align-center primary">
          <v-card-title class="headline white--text">Add Task</v-card-title>
          <div class="ml-auto">
            <v-btn icon color="gray" size="small" @click="dialog = false">
              <v-icon class="white--text">mdi-window-close</v-icon>
            </v-btn>
          </div>
        </div>

        <v-card-text class="">
          <form @submit.prevent="create">
            <v-text-field
              v-model="title"
              label="Wraite Task Title"
              variant="outlined"
              required
            ></v-text-field>
            <v-textarea
              v-model="notes"
              label="Write Task Notes"
              variant="outlined"
            ></v-textarea>
            <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ props }">
                <v-text-field
                  v-model="date"
                  variant="outlined"
                  label="Due Date"
                  v-bind="props"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu1 = false"
                :model-config="modelConfig"
              ></v-date-picker>
            </v-menu>
            <v-btn
              type="submit"
              color="primary"
              :disabled="!isDisabled"
              @click.stop="dialog = false"
              >Submit Task</v-btn
            >
          </form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import BaseLeftRightPartVue from "@/components/BaseLeftRightPart.vue";
import "v-calendar/dist/style.css";
import todosData from "./todosData";

const todos = ref(todosData);
const title = ref("");
const notes = ref("");
const date = ref("");
const dialog = ref(false);
const menu1 = ref(false);
const menu2 = ref(false);
const editTodo = ref(false);
const selectedTodo = ref();
const modelConfig = ref({
  type: "string",
  mask: "YYYY-MM-DD", // Uses 'iso' if missing
});

//Methods

function selectodo(index: any) {
  editTodo.value = !editTodo.value;
  selectedTodo.value = todos.value[index];
}

function removeTodo(todo: any) {
  todos.value = todos.value.filter((t) => t !== todo);
  editTodo.value = !editTodo.value;
}

function create() {
  todos.value.push({
    done: false,
    title: title.value,
    notes: notes.value,
    date: date.value,
  });

  (title.value = ""), (notes.value = ""), (date.value = "");
}

//Computed

const completedTodos = computed(() => {
  return todos.value.filter((todo) => todo.done).length;
});

const remainingTodos = computed(() => {
  return todos.value.length - completedTodos.value;
});

const isDisabled = computed(() => {
  return title.value.length > 0;
});
</script>
<style lang="scss">
.todoheight {
  height: calc(100vh - 300px);
}
</style>
