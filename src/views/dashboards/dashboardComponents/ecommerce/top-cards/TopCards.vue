<script setup lang="ts">
import { ref } from "vue";

const topcardsData = ref([
  {
    color: "secondary",
    bgcolor: "blue",
    icon: "users",
    title: "39,354",
    desc: "Customers",
    price: "-$9",
    status: "text-error",
  },
  {
    color: "warning",
    bgcolor: "yellow",
    icon: "box",
    title: "4,396",
    desc: "Products",
    price: "+$23",
    status: "text-success",
  },
  {
    color: "error",
    bgcolor: "red",
    icon: "bar-chart",
    title: "423,39",
    desc: "Sales",
    price: "+$38",
    status: "text-error",
  },
  {
    color: "success",
    bgcolor: "green",
    icon: "refresh-cw",
    title: "835 ",
    desc: "Refunds",
    price: "-$12",
    status: "text-error",
  },
]);
</script>

<template>
  <v-card class="overflow-hidden">
    <v-row>
      <v-col lg="3" cols="6" class="pa-0 border-right" v-for="(item, i) in topcardsData" :key="i">
        <div class="pa-9">
          <div class="mt-3">
            <v-btn color="inherit" icon :class="'pa-0 mr-3 text-' + item.color +  ' bg-'+ item.bgcolor + '-lighten-5'">
            
              <vue-feather :type="item.icon" size="24"></vue-feather>
            </v-btn>
          </div>
          <div>
            <h4
              class="
                font-weight-medium
                title
                text-h5
                d-flex
                align-center
                mt-6
              "
            >
              {{ item.title }}
              <span :class="item.status + ' text-caption ml-1'">
                {{ item.price }}</span
              >
            </h4>
            <span
              class="
                d-block
                text-truncate
                font-weight-regular
                text-grey-darken-1
              "
              >{{ item.desc }}</span
            >
          </div>
        </div>
        <!-- <v-divider vertical></v-divider> -->
      </v-col>
    </v-row>
  </v-card>
</template>
