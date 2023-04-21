<template>
  <div>
      <a class="btn btn-primary " :href="data" download="data.json">download JSON</a>
  </div>
</template>
<script>
  import json from '../../data/todo';
  
  export default {
    name: 'footerpage',
    data(){
      return{
        customizer :true,
        data:'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(json)),
      };
    },
  };
</script>



