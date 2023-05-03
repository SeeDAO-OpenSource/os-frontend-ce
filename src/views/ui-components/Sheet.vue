<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sheet - Using elevation">
          <SheetelEvation></SheetelEvation>
        </BaseCard>

        <BaseCard heading="Sheet - Tile">
          <SheetelTile></SheetelTile>
        </BaseCard>

        <BaseCard heading="Sheet - Colors & sizes">
          <SheetelColorSize></SheetelColorSize>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Sheet",

  data: () => ({
    page: {
      title: "Sheet"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        href: "#",
      },
      {
        text: "Sheet",
        disabled: true,
        href: "#",
      }
    ]
  }),
  components: {
    SheetelEvation: () =>
      import("@/components/vuetifyComponents/sheet/SheetelEvation"),
    SheetelTile: () =>
      import("@/components/vuetifyComponents/sheet/SheetelTile"),
    SheetelColorSize: () =>
      import("@/components/vuetifyComponents/sheet/SheetelColorSize")
  }
};
</script>
