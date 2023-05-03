<script setup lang="ts">
import { ref } from "vue";

const products = ref([
  {
    avatar: "1.jpg",
    name: "Is it good butterscotch ice-cream?",
    category: "Ice-Cream, Milk, Powder",
    earn: "546,000",
    percent: 45,
  },
  {
    avatar: "2.jpg",
    name: "Supreme fresh tomato available",
    category: "Market, Mall",
    earn: "780,000",
    percent: 20,
  },
  {
    avatar: "3.jpg",
    name: "Red color candy from Gucci",
    category: "Chocolate, Yummy",
    earn: "457,000",
    percent: 60,
  },
  {
    avatar: "4.jpg",
    name: "Stylish night lamp for night",
    category: "Elecric, Wire, Current",
    earn: "125,000",
    percent: 40,
  },
]);
</script>

<template>
  <v-card>
    <v-card-text>
      <h2 class="title text-h6 font-weight-medium">Products Performance</h2>
      <v-table class="month-table custom-px-0 mt-4">
        <template v-slot:default>
          <tbody>
            <tr class="month-item" v-for="item in products" :key="item.name">
              <td>
                <div class="d-flex align-center">
                  <v-avatar class="rounded-lg overflow-hidden" size="70">
                    <img
                      :src="`/assets/images/products/${item.avatar}`"
                      :alt="item.avatar"
                      width="90"
                      height="70"
                      class="rounded-lg"
                    />

                    <!-- <v-img
                      width="90"
                      height="70"
                      class="rounded-lg"
                      :src="require('../src/assets/images/products/' + item.avatar)"
                    /> -->
                  </v-avatar>
                  <div class="ml-3">
                    <h6 class="font-weight-medium text-subtitle-1">
                      {{ item.name }}
                    </h6>
                    <span
                      class="font-weight-regular text-body-2 text-grey-darken-1"
                    >
                      {{ item.category }}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="item.percent >= 40">
                  <h6 class="font-weight-medium text-body-2 mb-1">Good</h6>
                  <v-progress-linear
                    color="secondary"
                    background-color="grey lighten-3"
                    :model-value="item.percent"
                    rounded
                    class="mb-1"
                  ></v-progress-linear>
                  <span
                    class="font-weight-regular text-body-2 text-grey-darken-1 text-no-wrap"
                  >
                    {{ item.percent }}% sold
                  </span>
                </div>
                <div v-else>
                  <h6 class="font-weight-medium text-body-2 mb-1">Bad</h6>
                  <v-progress-linear
                    color="primary"
                    background-color="primary lighten-3"
                    :model-value="item.percent"
                    rounded
                    class="mb-1"
                  ></v-progress-linear>
                  <span
                    class="font-weight-regular text-body-2 text-grey-darken-1"
                  >
                    {{ item.percent }}% sold
                  </span>
                </div>
              </td>
              <td>
                <span class="font-weight-regular text-body-2 text-grey-darken-1"
                  >Earnings</span
                >
                <h6 class="font-weight-medium text-body-1 mb-1">
                  ${{ item.earn }}
                </h6>
              </td>
              <td class="pl-0">
                <v-btn icon color="transparent">
                  <vue-feather type="trash" size="20"></vue-feather>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-table>
    </v-card-text>
  </v-card>
</template>
