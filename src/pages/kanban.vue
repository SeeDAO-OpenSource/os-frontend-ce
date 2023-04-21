<template>
  <div>
    <Breadcrumbs main="" title="Kanban Board" />
    <div class="container-fluid jkanban-container">
      <div class="row">
            <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Default Demo</h5>
                  </div>
                  <div class="card-body">
                    <kanban-board :stages="stages" :blocks="blocks">
                        <div v-for="stage in stages" :slot="stage" :key="stage">
                            <div class="kanban-title-board">{{ stage }}</div>
                        </div>
                        <div v-for="block in blocks" :slot="block.id" :key="block.id">

                        <a class="kanban-box" href="#" >
                            <span class="date">{{ block.date }} </span>
                            <span class="badge f-right" :class="block.badgetype">{{ block.badge }}</span>
                                <h6>{{block.title}}</h6>
                                <div class="media"><img class="img-20 mr-1 rounded-circle" src="../assets/images/user/3.jpg" alt="" data-original-title="" title="">
                                  <div class="media-body">
                                    <p>{{block.location}}</p>
                                  </div>
                                </div>
                                <div class="d-flex mt-3">
                                  <ul class="list">
                                    <li><i class="fa fa-comments-o"></i>2</li>
                                    <li><i class="fa fa-paperclip"></i>2</li>
                                    <li><i class="fa fa-eye"></i></li>
                                  </ul>
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block mr-3">
                                        <p class="f-12">+5</p>
                                      </li>
                                      <li class="d-inline-block"><img class="img-20 rounded-circle" src="../assets/images/user/3.jpg" alt="" data-original-title="" title=""></li>
                                      <li class="d-inline-block"><img class="img-20 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-original-title="" title=""></li>
                                      <li class="d-inline-block"><img class="img-20 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-original-title="" title=""></li>
                                    </ul>
                                  </div>
                                </div>
                                </a>
                        </div>
                    </kanban-board>
                  </div>
                </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        stages: ['doing', 'to-do', 'done'],
        blocks: [
          {
            id: 1,
            status: 'doing',
            title: 'Test Sidebar',
            date: '24/7/20',
            badge: 'Argent',
            badgetype: 'badge-danger',
            location: 'Themeforest, australia'
          },
          {
            id: 2,
            status: 'doing',
            title: 'Design Dashboard',
            date: '20/9/20',
            badge: 'medium',
            badgetype: 'badge-primary',
            location: 'Pixelstrap, New york'
          },
          {
            id: 3,
            status: 'to-do',
            title: 'Test card',
            date: '10/11/20',
            badge: 'low',
            badgetype: 'badge-success',
            location: 'Pixelstrap, New york'
          },
          {
            id: 4,
            status: 'to-do',
            title: 'Dashboard issues',
            date: '03/09/20',
            badge: 'Argent',
            badgetype: 'badge-danger',
            location: 'Themeforest, australia'
          },
          {
            id: 5,
            status: 'done',
            title: 'Design Dashboard',
            date: '24/12/20',
            badge: 'medium',
            badgetype: 'badge-primary',
            location: 'Themeforest, australia'
          },
          {
            id: 6,
            status: 'done',
            title: 'Test Sidebar',
            date: '31/11/20',
            badge: 'Argent',
            badgetype: 'badge-danger',
            location: 'Pixelstrap, New york'
          }
        ],
      };
    },
    mounted() {
    },
    methods:{
    }
  };
</script>