<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Lazy">
          <Lazy></Lazy>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Lazy",

  data: () => ({
    page: {
      title: "Lazy"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        href: "#",
      },
      {
        text: "Lazy",
        disabled: true,
        href: "#",
      }
    ]
  }),
  components: {
    Lazy: () => import("@/components/vuetifyComponents/lazy/Lazy")
  }
};
</script>
