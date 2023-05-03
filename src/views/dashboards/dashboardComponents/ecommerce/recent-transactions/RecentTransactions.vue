<script setup lang="ts">
import { ref } from "vue";

const statsData = ref([
  {
    color: "info",
    bgcolor: "blue",
    icon: "dollar-sign",
    title: "PayPal Transfer",
    desc: "Money Added",
    price: "+$350",
    status: "text-success",
  },
  {
    color: "success",
    bgcolor: "green",
    icon: "shield",
    title: "Wallet",
    desc: "Bill Payment",
    price: "-$560",
    status: "text-error",
  },
  {
    color: "error",
    bgcolor: "red",
    icon: "credit-card",
    title: "Credit Card",
    desc: "Money reversed",
    price: "+$350",
    status: "text-success",
  },
  {
    color: "warning",
    bgcolor: "yellow",
    icon: "check",
    title: "Bank Transfer",
    desc: "Money added",
    price: "+$350",
    status: "text-success",
  },
  {
    color: "info",
    bgcolor: "blue",
    icon: "dollar-sign",
    title: "Refund",
    desc: "Payment Sent",
    price: "-$50",
    status: "text-error",
  },
]);
</script>

<template>
  <v-card class="w-100">
    <v-card-text>
      <h2 class="title text-h6 font-weight-medium mb-5">Recent Transactions</h2>
      <!-- lists -->
      <div class="px-0" v-for="(item, i) in statsData" :key="i">
        <div class="d-flex align-center py-3">
          <div class>
            <v-btn
              color="inherit"
              height="45"
              width="45"
              min-width="45"
              :class="
                'pa-0 mr-3 text-' +
                item.color +
                ' bg-' +
                item.bgcolor +
                '-lighten-5'
              "
            >
              <vue-feather :type="item.icon" size="18"></vue-feather>
            </v-btn>
          </div>
          <div class="ml-2">
            <h4 class="font-weight-medium text-subtitle-1 title">
              {{ item.title }}
            </h4>
            <span
              class="
                text-grey-darken-1 text-subtitle-2
                d-block
                text-truncate
                font-weight-regular
                mt-n1
              "
              >{{ item.desc }}</span
            >
          </div>
          <div class="ml-auto">
            <span :class="item.status"> {{ item.price }}</span>
          </div>
        </div>
      </div>
      <v-divider class="my-4"></v-divider>
      <div class="d-flex justify-space-between align-center">
        <v-btn color="secondary">Add</v-btn>
        <p class="text-body-2 ma-0 text-grey-darken-1">
          36 Recent Transactions
        </p>
      </div>
    </v-card-text>
  </v-card>
</template>
