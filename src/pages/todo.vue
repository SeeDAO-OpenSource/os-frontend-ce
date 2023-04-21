<template>
    <div>
        <Breadcrumbs title="To-do"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
         <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5>To-Do</h5>
                    </div>
                    <div class="card-body">
                        <div class="todo">
                            <div class="todo-list-wrapper">
                                <div class="todo-list-container">
                                    <div class="mark-all-tasks">
                                        <div class="mark-all-tasks-container">
                                            <span class="mark-all-btn" v-on:click="complete_all_todo" :class="{'move-up': mark == 'allcompleted'}">
                                                <span class="btn-label font-danger">Mark all as finished</span>
                                                <span class="action-box action-box-checked-danger"><i class="icon font-danger"><i class="icon-check"></i></i></span>
                                            </span>
                                            <span class="mark-all-btn" v-on:click="incomplete_all_todo" :class="{'move-down': mark == 'allnotcompleted'}">
                                                <span class="btn-label font-success">Mark all as Incomplete</span>
                                                <span class="action-box action-box-checked-success"><i class="icon font-success"><i class="icon-check"></i></i></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="todo-list-body">
                                        <ul id="todo-list">
                                          
                                          <li class="task" v-for="(t,index) in todos" :class="{'completed': t.status == 1}" :key="index">
                                            <div class="task-container">
                                              <h4 class="task-label" v-text="t.title"></h4>
                                              <span class="task-action-btn">
                                                <span class="action-box large delete-btn" title="Delete Task"><i class="icon"><i class="icon-trash"></i></i></span>
                                                <span class="action-box large complete-btn" title="Mark Complete" v-on:click="complete_todo(index,t.status)" ><i class="icon"><i class="icon-check"></i></i></span>
                                              </span>
                                            </div>
                                          </li>

                                        </ul>
                                    </div>
                                    <div class="todo-list-footer">
                                        <div class="add-task-btn-wrapper">
                                            <span class="add-task-btn" :class="{'hide': show_add == 'textarea'}">
                                                <button class="btn btn-primary" v-on:click="show_add_area('textarea')"><i class="icon-plus"></i> Add new task</button>
                                            </span>
                                        </div>
                                        <div class="new-task-wrapper" :class="{'visible': show_add == 'textarea'}">
                                          <textarea v-model="add_new_task_title" placeholder="Enter new task here. . ."></textarea>
                                          <span class="btn btn-danger cancel-btn" v-on:click="show_add_area('button')">Close</span>
                                          <span class="btn btn-success ml-3 add-new-task-btn" v-on:click="add_new_task()" >Add Task</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <notifications group="todo" />
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
  export default {
    data(){
      return{
        add_new_task_title:'',
        mark:'allnotcompleted',
        show_add:'button',
        todos:[
          {
            title:'Weekly Bigbazar Shopping',
            status:1
          },
          {
            title:'Go Outside Picnic on Sunday',
            status:0
          },
          {
            title:'Write a blog post',
            status:0
          },
          {
            title:'Pay the electricity bills',
            status:1
          },
          {
            title:'Make dinner reservation',
            status:0
          },
          {
            title:'Meeting with photographer',
            status:0
          },
          {
            title:'Birthday wish to best friend',
            status:0
          }
        ]
      };
    },
    mounted(){
      this.$notify({
        group: 'todo',
        type: 'success',
        title: 'Important message',
        text: 'Hello user! This is a notification!',
        closeOnClick:true,
        duration:-1,
      });
    },
    methods:{
      complete_todo:function(index,status) {
        if(status === 0) {    
          this.todos[index].status = 1;
        } else if(status === 1) {
          this.todos[index].status = 0;
        }
      },
      complete_all_todo:function() {
        for(var i = 0; i < this.todos.length; i++) {
          this.todos[i].status = 1;
        }
        this.mark = 'allcompleted';
      },
      incomplete_all_todo:function() {
        for(var i = 0; i < this.todos.length; i++) {
          this.todos[i].status = 0;
        }
        this.mark = 'allnotcompleted';
      },
      show_add_area:function(show_status) {
        if(show_status === 'textarea') {
          this.show_add = show_status;
        } else if(show_status === 'button') {
          this.show_add = show_status;
        }
      },
      add_new_task:function(){
        this.todos.push({ title: this.add_new_task_title, status: 0 });
        this.add_new_task_title = '';
      }
    }
  };
</script>

<style>
    .action-box-checked-success{
        border: 1px solid #22af94;
        border-radius: 4px;
    }
    .action-box-checked-danger{
        border: 1px solid #ff5370;
        border-radius: 4px;
    }
    .active-mark{
        display:block;
    }
</style>