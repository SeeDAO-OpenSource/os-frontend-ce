<template>
    <div>
        <Breadcrumbs main="Bonus UI" title="drag and  drop"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
              <div class="card">
                  <div class="card-header">
                      <h5>Basic Drag & Drop</h5>
                  </div>
                  <div class="card-body">
                      <div class="drag-drop-vue">
                          <div class="pull-left " v-dragula="one" service="my-third" drake="a">
                              <div v-for="text in one" :key="text"><b-card>{{text}}</b-card></div>
                          </div>
                          <div class="pull-right" v-dragula="two" service="my-third" drake="a">
                              <div v-for="text in two" :key="text">{{text}}</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="card">
                  <div class="card-header">
                      <h5>Copy Drag & Drop</h5>
                  </div>
                  <div class="card-body">
                      <div class="drag-drop-vue">
                          <div class="pull-left " v-dragula="colOne" service="my-third" drake="a">
                              <div v-for="text in colOne" :key="text">{{text}}</div>
                          </div>
                          <div class="pull-right" v-dragula="colTwo" service="my-third" drake="a">
                              <div v-for="text in colTwo" :key="text">{{text}}</div>
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
    components: {
    },
    data(){
      return{
        one: [
          'Lorem ipsum dolor sit amet, consectetur',
          'sed do eiusmod tempor incididunt ut labore et dolore magna.',
          'Ut enim ad minim veniam, quis nostrud exercitation',
          'ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ],
        two: [
          'Duis aute irure dolor in reprehenderit in voluptate velit esse',
          'cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident,',
          'sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        colOne: [
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          'Aenean commodo ligula eget dolor. Aenean massa.',
          'Lorem ipsum dolor sit amet, consectetur',
          'sed do eiusmod tempor incididunt ut labore et dolore magna.',
          'Ut enim ad minim veniam, quis nostrud exercitation',
          'ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ],
        colTwo: [
          'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse',
          'cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident,',
          'sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]
      };
    },
    methods:{
          
    }
        
  };
</script>
<style scoped>
body {
  background-color: #942A57;
  margin: 0 auto;
  max-width: 760px;
}

html, body {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

body, input, button {
  font-family: Georgia, Helvetica;
  font-size: 17px;
  color: #ecf0f1;
}

h1 {
  text-align: center;
  background-color: #AC5C7E;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 10px;
}

h3 {
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom: 5px solid #A13462;
  text-align: center;
  padding: 10px;
}

h3 div {
  margin-bottom: 10px;
}

.tagline {
  margin-top: 0;
}

a {
  font-weight: bold;
}
a,
a:hover {
  color: #ecf0f1;
}

pre {
  white-space: pre-wrap;
}

pre code {
  color: #fff;
  font-size: 14px;
  line-height: 1.3;
}

label {
  display: block;
  margin-bottom: 15px;
}

sub {
  display: block;
  margin-top: -10px;
  margin-bottom: 15px;
  font-size: 11px;
  font-style: italic;
}

ul {
  margin: 0;
  padding: 0;
}

.parent {
  background-color: rgba(255, 255, 255, 0.2);
  margin: 50px 0;
  padding: 20px;
}

input {
  border: none;
  outline: none;
  background-color: #ecf0f1;
  padding: 10px;
  color: #942A57;
  border: 0;
  margin: 5px 0;
  display: block;
  width: 100%;
}

button {
  background-color: #ecf0f1;
  color: #942A57;
  border: 0;
  padding: 18px 12px;
  margin-left: 6px;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #e74c3c;
  color: #ecf0f1;
}

.gh-fork {
  position: fixed;
  top: 0;
  right: 0;
  border: 0;
}

/* dragula-specific example page styles */
.wrapper {
  display: table;
}
.container {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
}
.container:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.2);
}
.container div,
.gu-mirror {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 0.4s ease-in-out;
}
.container div {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  margin-bottom: 10px;
}
.container div:last-child {
  margin-bottom: 0;
}
.gu-mirror {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
.container .ex-moved {
  background-color: #e74c3c;
}
.container.ex-over {
  background-color: rgba(255, 255, 255, 0.3);
}
.handle {
  padding: 0 5px;
  margin-right: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: move;
}

/* example styles */
.container .scale-transition {
  overflow: hidden;
  height: 40px;
  transition: height .2s;
}
.container .scale-enter {
  height: 0px;
}
.container .scale-leave {
  height: 0px;
}
</style>
