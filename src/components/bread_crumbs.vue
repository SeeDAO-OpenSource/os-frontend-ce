<template>
<div>
<div class="container-fluid">
  <div class="page-title">
    <div class="row">
      <div class="col-6 d-flex">
        <h3>{{title}}</h3>
      </div>
      <div class="col-6">
        <ol class="breadcrumb">
    <li class="breadcrumb-item"><router-link :to="{ path: '/dashboard/default' }"><feather type="home"></feather></router-link></li>
    <li class="breadcrumb-item" v-if="main">{{main}}</li>
    <li class="breadcrumb-item active" v-if="title">{{title}}</li>
  </ol>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

  export default {
    components: {},
    props: {
      title: {
        default: 'home'
      },
      main: {
        default: ''
      }
    }
  };
</script>
