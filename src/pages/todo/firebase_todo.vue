<template>
    <div>
        <Breadcrumbs main="" title="firebase todo"/>
        <!-- Container-fluid starts-->
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-header firebase-header">
                    <h5>firebase todo</h5>
                  </div>
                  <div class="card-body custom-scrollbar">
                    <div class="todo">
                      <div class="todo-list-wrapper">
                        <div class="todo-list-container">
                          <div class="mark-all-tasks firebase-sm">
                            <div @click="alltaskcomplete()" class="mark-all-tasks-container">
                              <span class="mark-all-btn" :class="{'move-down':!markallread}"  id="mark-all-finished" role="button">
                                <span class="btn-label">Mark all as finished</span>
                                <span class="action-box completed">
                                  <i class="icon">
                                    <i class="icon-check"></i>
                                  </i>
                                </span>
                              </span>
                              <span class="mark-all-btn " :class="{'move-down':markallread}" id="mark-all-incomplete" role="button">
                                <span class="btn-label">Mark all as Incomplete</span>
                                <span class="action-box">
                                  <i class="icon">
                                    <i class="icon-check"></i>
                                  </i>
                                </span>
                              </span>
                            </div>
                          </div>
                          <div class="todo-list-body">
                            <ul id="todo-list">
                              <li  v-for="(todo,index) in todolist" :key="index" class="task" :class="{'completed':todo.status == 'complete'}">
                                <div class="task-container">
                                  <h4 class="task-label"> {{todo.title}} </h4>
                                  <span class="task-action-btn">
                                      <span @click="tododelete(todo.id)" class="action-box large delete-btn" title="Delete Task"><i class="icon"><i class="icon-trash"></i></i></span>
                                     <span @click="taskcomplete(todo.id,todo.status)" class="action-box large complete-btn" title="Mark Complete"><i class="icon"><i class="icon-check"></i></i></span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div class="todo-list-footer">
                            <div class="add-task-btn-wrapper"><span class="add-task-btn">
                                <button  @click='addtask =! addtask' class="btn btn-primary" :class="{'d-none':addtask}"><i class="icon-plus"></i> Add new task</button></span></div>
                            <div class="new-task-wrapper " :class="{'visible':addtask}">
                              <textarea v-on:keyup.enter="addnewtask" v-model="task" id="new-task" placeholder="Enter new task here. . ."></textarea>
                              <span @click='addtask = false'  class="btn btn-danger cancel-btn" id="close-task-panel">Close</span>
                              <span @click="addnewtask()" class="btn btn-success ml-3 add-new-task-btn" id="add-task">Add Task</span>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div>
                        <notifications classes="task" group="Todolist" />
                      </div>
                    </div>


                    <!-- HTML Template for tasks-->
                    <script id="task-template " type="tect/template">
                      <li class="task">
                      <div class="task-container">
                      <h4 class="task-label"></h4>
                      <span class="task-action-btn">
                      <span class="action-box large delete-btn" title="Delete Task">
                      <i class="icon"><i class="icon-trash"></i></i>
                      </span>
                      <span class="action-box large complete-btn" title="Mark Complete">
                      <i class="icon"><i class="icon-check"></i></i>
                      </span>
                      </span>
                      </div>
                      </li>
                    </script>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <!-- Container-fluid Ends-->
    </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    name:'todo',
    data(){
      return {
        markallread :true,
        addtask :false,
        task:''
      };
    },
    computed: {
      ...mapState({
        todolist: state => state.firebase_todo.todo,
      })
    },
    created(){
      this.retrieveTodos();
    },
    methods:{
      retrieveTodos() {
        this.$store.dispatch('firebase_todo/retrieveTodos');
      },
      taskcomplete(id,status) {
        this.$store.dispatch('firebase_todo/taskcomplete', id);
        this.retrieveTodos();

        if(status !== 'complete')
          this.$toasted.show(' tasks marked as complete.', { theme: 'outline', type: 'success', duration: 2000 });
        else
          this.$toasted.show(' tasks marked as incomplete.', { theme: 'outline', type: 'error', duration: 2000 });
      },
      alltaskcomplete() {
        this.$store.dispatch('firebase_todo/alltaskcomplete',this.markallread);
        this.markallread =! this.markallread;
        this.retrieveTodos();

        if(this.markallread)
          this.$toasted.show('All tasks marked as Incomplete.',{ theme:'outline', type : 'error',duration:2000 });
        else
          this.$toasted.show('All tasks marked as complete.',{ theme:'outline', type : 'success',duration:2000 });

      },
      tododelete(id) {
        this.$store.dispatch('firebase_todo/tododelete', id);
        this.retrieveTodos();
        this.$toasted.show('Task has been deleted.',{ theme:'outline', type : 'success',duration:2000 });
      },
      addnewtask() {
        if(this.task !== '') {
          this.$store.dispatch('firebase_todo/addtodo', this.task);
          this.task = '';
          this.addtask = false;
          var container = this.$el.querySelector('.todo-list-body');
          setTimeout(function () {
            container.scrollBy({ top: 200, behavior: 'smooth' });
          }, 310);
          this.$toasted.show('Task list is updated.',{ theme:'outline', type : 'success',duration:2000 });
          this.retrieveTodos();
        }

      }
    }


  };
</script>
