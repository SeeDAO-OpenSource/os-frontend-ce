<template>
  <div>
    <Breadcrumbs main="Form Widgets" title="Typeahead" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="typeahead">
        <div class="row">
          <div class="col-md-12 col-xl-6">
            <div class="card">
              <div class="card-header">
                <h5>Basic Demo</h5>
                <span>This is the simple demo for Typeahead.</span>
              </div>
              <div class="card-body">
                <div id="the-basics">
                  <form class="theme-form">
                    <div class="form-group">
                      <vue-bootstrap-typeahead
                        v-model="query"
                        inputClass="typeahead"
                        :data="countries"
                        placeholder="State of USA"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-xl-6">
            <div class="card">
              <div class="card-header">
                <h5>RTL Support</h5>
                <span>Dataset shows in Right Side.</span>
              </div>
              <div class="card-body">
                <div id="rtl-support">
                  <form class="theme-form">
                    <div class="form-group">
                      <vue-bootstrap-typeahead
                        v-model="query"
                        inputClass="typeahead"
                        :data="countries"
                        dir="rtl"
                        placeholder="Countries"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-xl-6">
            <div class="card">
              <div class="card-header">
                <h5>API</h5>
                <span>Using API fetch Typeahead Data</span>
              </div>
              <div class="card-body">
                <div id="prefetch">
                  <!-- <form class="theme-form"> -->
                  <div class="form-group mb-0">
                    <vue-bootstrap-typeahead
                      class="mb-4"
                      v-model="query"
                      :data="users"
                      :serializer="item => item.login"
                      @hit="selectedUser = $event"
                      placeholder="Search GitHub Users"
                    />
                    <h6>Selected User JSON</h6>
                    <pre v-if="selectedUser" class="mb-0">{{ selectedUser | stringify }}</pre>
                  </div>
                  <!-- </form> -->
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-xl-6">
            <div class="card">
              <div class="card-header">
                <h5>Prepending & Appending</h5>
                <span>Add Prepending & Appending lable or button in typerhead as well as result data on button click</span>
              </div>
              <div class="card-body">
                <div id="bloodhound">
                  <div class="form-group mb-0">
                    <vue-bootstrap-typeahead
                      class="mb-4"
                      v-model="query"
                      :data="users"
                      :serializer="item => item.login"
                      @hit="searchUser = $event"
                      placeholder="Search GitHub Users"
                      prepend="name:"
                    >
                      <template slot="append">
                        <button @click="displayUser=true" class="btn btn-primary">Search</button>
                      </template>
                    </vue-bootstrap-typeahead>

                    <h6>Search User JSON</h6>
                    <pre v-if="displayUser" class="mb-0">{{ searchUser | stringify }}</pre>
                  </div>
                </div>
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
  import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
  
  const axios = require('axios');
  export default {
    components: {
      VueBootstrapTypeahead
    },
    filters: {
      stringify(value) {
        return JSON.stringify(value, null, 2);
      }
    },
    data() {
      return {
        query: '',
        selectedUser: null,
        searchUser:null,
        users: [],
        displayUser: false,
        countries: [
          'alabama',
          'alaska',
          'arizona',
          'arkansas',
          'california',
          'colorado',
          'connecticut',
          'delaware',
          'florida',
          'georgia',
          'hawaii',
          'idaho',
          'illinois',
          'indiana',
          'iowa',
          'kansas',
          'kentucky',
          'louisiana',
          'maine',
          'maryland',
          'massachusetts',
          'michigan',
          'minnesota',
          'mississippi',
          'missouri',
          'montana',
          'nebraska',
          'nevada',
          'new hampshire',
          'new jersey',
          'new mexico',
          'new york',
          'north carolina',
          'north dakota',
          'ohio',
          'ohio2',
          'ohio3',
          'oklahoma',
          'oregon',
          'pennsylvania',
          'rhode island',
          'south carolina',
          'south dakota',
          'tennessee',
          'texas',
          'utah',
          'vermont',
          'virginia',
          'washington',
          'west virginia',
          'wisconsin',
          'wyoming'
        ]
      };
    },
    watch: {
      query(newQuery) {
        axios
          .get(`https://api.github.com/search/users?q=${newQuery}`)
          .then(res => {
            this.users = res.data.items;
          });
      }
    }
  };
</script>