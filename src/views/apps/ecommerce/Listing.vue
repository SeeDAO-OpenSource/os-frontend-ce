<template>
  
    <v-card class="contact-app">
      <!-- ALGOLIA Search -->
      <ais-instant-search
        index-name="demo_ecommerce"
        :search-client="searchClient"
      >
        <BaseLeftRightPartVue>
          <template v-slot:leftpart>
            <v-card-text class="border-bottom pa-4">
              <v-btn block depressed color="primary" dark>
                <ais-clear-refinements />
              </v-btn>
            </v-card-text>
            <v-card-text>
              <h2 class="subtitle-1 font-weight-medium">Brands</h2>
              <ais-refinement-list attribute="brand" class="mt-3" searchable />
              <h2 class="subtitle-1 font-weight-medium mt-5 border-top pt-5">
                Price sort
              </h2>
              <ais-numeric-menu
                attribute="price"
                :items="[
                  { label: 'All' },
                  { label: '<= 10$', end: 10 },
                  { label: '10$ - 100$', start: 10, end: 100 },
                  { label: '100$ - 500$', start: 100, end: 500 },
                  { label: '>= 500$', start: 500 },
                ]"
              >
              </ais-numeric-menu>

              <ais-configure :hitsPerPage="12" />
            </v-card-text>
            <div class="text-center mt-5">
              <img src="@/assets/images/algolia.png" width="100" />
            </div>
          </template>
          <template v-slot:rightpart>
            <div class="pa-4">
              <v-row>
                <v-col lg="6">
                  <ais-search-box />
                </v-col>
              </v-row>
            </div>
            <v-divider></v-divider>
            <div class="pa-5">
              <v-row>
                <v-col cols="12">
                  <perfect-scrollbar class="listbox">
                  <ais-hits >
                    
                    <template v-slot="{ items, sendEvent }">
                      <div class="v-row">
                        <div
                          v-for="item in items"
                          :key="item.objectID"
                          class="v-col-4"
                        >
                          <div class="product-img">
                            <img :src="item.image" :alt="item.name" class="" />
                          </div>
                          <h4>{{ item.name }}</h4>
                          <v-btn
                            class="mt-2"
                            color=secondary
                            @click="sendEvent('click', item, 'Item Added')"
                          >
                            Add to cart
                          </v-btn>
                        </div>
                      </div>
                    </template>
                    
                  </ais-hits>
                  </perfect-scrollbar>
                </v-col>
              </v-row>
              <ais-pagination />
            </div>
          </template>
        </BaseLeftRightPartVue>
      </ais-instant-search>
    </v-card>
  
</template>
<script setup lang="ts">
import algoliasearch from "algoliasearch/lite";
import { ref } from "vue";
import BaseLeftRightPartVue from "@/components/BaseLeftRightPart.vue";

const searchClient = ref(
  algoliasearch("B1G2GM9NG0", "aadef574be1f9252bb48d4ea09b5cfe5")
);
</script>
<style lang="scss">
.product-title {
  --max-lines: 2;
  max-height: calc(1.1rem * 2);
  overflow: hidden;
}

.product-subtitle {
  --max-lines: 2;
  max-height: calc(0.7rem * 2);
  overflow: hidden;
}

.product-img {
  max-height: 200px;
  height: 200px;
  overflow: hidden;
}

.ais-RefinementList-list,
.ais-NumericMenu-list {
  list-style: none;
  padding-left: 0 !important;
  margin-top: 15px;
}

.ais-RefinementList-list .ais-RefinementList-item,
.ais-NumericMenu-list .ais-NumericMenu-item {
  padding: 6px 0;
}

.ais-RefinementList-labelText,
.ais-NumericMenu-labelText {
  margin-left: 8px;
  font-size: 16px;
}

.ais-RefinementList-label {
  display: flex;
  align-items: flex-start;
}

.ais-RefinementList-count {
  padding: 2px 12px;
  background: #fcf1ed;
  color: #121212 !important;
  border-radius: 12px;
  font-weight: 600;
  margin-left: auto;
}

.ais-SearchBox-input {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #54667a;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.ais-SearchBox-input:focus {
  outline: none;
}

.ais-SearchBox-form {
  position: relative;
}

.ais-SearchBox-submit {
  padding: 8px 12px;
  background: #fb9778;
  position: absolute;
  right: 0;
  top: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.ais-SearchBox-submit svg {
  fill: #fff;
}

.p-15 {
  padding: 15px !important;
}

.ais-SearchBox-reset {
  position: absolute;
  right: 30px;
  top: 0;
  padding: 8px 10px;
}
.ais-SearchBox-reset:focus {
  outline: none;
}

.ais-SearchBox-reset svg {
  fill: red;
}
.ais-Hits{
  overflow:hidden;
  
  .v-row{
    margin:0px;
  }
  .v-col-4{
    border:1px solid rgba(0,0,0,0.1);
    padding:20px;
  }
}
.ais-Hits-list {
  padding-left: 0 !important;
  list-style: none;
  margin: 0 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 0;
}

.hit-price {
  background: #bbdefb;
  display: inline-block;
  padding: 4px 9px;
  border-radius: 23px;
  margin-bottom: 10px;
  line-height: normal;
  margin-top: 5px;
  font-size: 15px;
}

.ais-Pagination-list {
  padding-left: 0 !important;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ais-Pagination-item {
  padding: 6px 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.ais-Pagination-item.ais-Pagination-item--firstPage {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

li.ais-Hits-item {
  width: 50%;
  display: inline-block;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.listbox{
  height:calc(100vh - 400px);
  
}
</style>
