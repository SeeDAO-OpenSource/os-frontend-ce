<script setup lang="ts">
import { ref } from "vue";
import WelcomeCard from "../dashboardComponents/analytical/welcome-card/WelcomeCard.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import TheEarnings from "@/views/dashboards/dashboardComponents/analytical/earnings/TheEarnings.vue";
import MonthlyRevenue from "@/views/dashboards/dashboardComponents/analytical/monthly-revenue/MonthlyRevenue.vue";
import TheSalesOverview from "@/views/dashboards/dashboardComponents/analytical/sales-overview/TheSalesOverview.vue";
import TotalSales from "@/views/dashboards/dashboardComponents/analytical/total-sales/TotalSales.vue";
import ProductMonthTable from "@/views/dashboards/dashboardComponents/analytical/project-month-table/ProductMonthTable.vue";
import BlogCard from "@/views/dashboards/dashboardComponents/analytical/blog-card/BlogCard.vue";
import WeeklyStats from "@/views/dashboards/dashboardComponents/analytical/weekly-stats/WeeklyStats.vue";
import DailyActivities from "@/views/dashboards/dashboardComponents/analytical/daily-activities/DailyActivities.vue";

const page = ref({ title: "Analytical" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "Analytical",
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
    <v-col cols="12" sm="12" lg="6">
      <WelcomeCard />
      <v-row class="mt-4">
        <v-col cols="12" sm="6" lg="6" class="">
          <TheEarnings></TheEarnings>
        </v-col>
        <v-col cols="12" sm="6" lg="6" class="">
          <MonthlyRevenue></MonthlyRevenue>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <TheSalesOverview></TheSalesOverview>
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <TotalSales></TotalSales>
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <ProductMonthTable></ProductMonthTable>
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <BlogCard></BlogCard>
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <WeeklyStats></WeeklyStats>
    </v-col>
    <v-col cols="12" sm="12" lg="4">
      <DailyActivities></DailyActivities>
    </v-col>
  </v-row>
</template>
