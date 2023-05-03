<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";

import EarningsDownload from "@/views/dashboards/dashboardComponents/ecommerce/earnings-download/EarningsDownload.vue";
import TopCards from "@/views/dashboards/dashboardComponents/ecommerce/top-cards/TopCards.vue";
import ProductsChart from "@/views/dashboards/dashboardComponents/ecommerce/products-chart/ProductsChart.vue";
import Earnings from "@/views/dashboards/dashboardComponents/ecommerce/earnings/Earnings.vue";
import YearlySales from "@/views/dashboards/dashboardComponents/ecommerce/yearly-sales/YearlySales.vue";
import RecentTransactions from "@/views/dashboards/dashboardComponents/ecommerce/recent-transactions/RecentTransactions.vue";
import ProductPerformance from "@/views/dashboards/dashboardComponents/ecommerce/product-performance/ProductPerformance.vue";
import WeeklyStats from "@/views/dashboards/dashboardComponents/analytical/weekly-stats/WeeklyStats.vue";
import MedicalProBranding from "@/views/dashboards/dashboardComponents/ecommerce/medicalpro-branding/MedicalProBranding.vue";
import DailyActivites from "@/views/dashboards/dashboardComponents/ecommerce/daily-activities/DailyActivites.vue";

const page = ref({ title: "Ecommerce" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "Ecommerce",
    disabled: true,
    href: "#",
  },
]);
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" lg="4">
      <EarningsDownload />
    </v-col>
    <v-col cols="12" lg="8">
      <TopCards />
    </v-col>
    <v-col cols="12" lg="8">
      <ProductsChart />
    </v-col>
    <v-col cols="12" lg="4">
      <Earnings />
      <YearlySales />
    </v-col>
    <v-col cols="12" lg="4" class="d-flex align-items-stretch">
      <RecentTransactions />
    </v-col>
    <v-col cols="12" lg="8" class="d-flex align-items-stretch">
      <ProductPerformance />
    </v-col>
    <v-col cols="12" lg="4">
      <WeeklyStats />
    </v-col>
    <v-col cols="12" lg="4">
      <MedicalProBranding />
    </v-col>
    <v-col cols="12" lg="4">
    <DailyActivites />
    </v-col>
  </v-row>
</template>
