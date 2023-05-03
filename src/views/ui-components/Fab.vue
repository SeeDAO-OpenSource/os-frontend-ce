<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="FAB - Small variant">
          <FabSmall></FabSmall>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="FAB - Display animation">
          <FabDisplayAnimation></FabDisplayAnimation>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="FAB - FAB with speed-dial">
          <FabSpeedDial></FabSpeedDial>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="FAB - Lateral screens">
          <FabLateralScreen></FabLateralScreen>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Fab",

  data: () => ({
    page: {
      title: "Fab"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        href: "#",
      },
      {
        text: "Fab",
        disabled: true,
        href: "#",
      }
    ]
  }),
  components: {
    FabSmall: () => import("@/components/vuetifyComponents/fab/FabSmall"),
    FabDisplayAnimation: () =>
      import("@/components/vuetifyComponents/fab/FabDisplayAnimation"),
    FabSpeedDial: () =>
      import("@/components/vuetifyComponents/fab/FabSpeedDial"),
    FabLateralScreen: () =>
      import("@/components/vuetifyComponents/fab/FabLateralScreen")
  }
};
</script>
