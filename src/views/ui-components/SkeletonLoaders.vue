<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="SkeletonLoaders - Implementation methods">
          <SkeletonLoadersImplementationMethods></SkeletonLoadersImplementationMethods>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SkeletonLoaders",

  data: () => ({
    page: {
      title: "Skeleton Loaders"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        href: "#",
      },
      {
        text: "Skeleton Loaders",
        disabled: true,
        href: "#",
      }
    ]
  }),
  components: {
    SkeletonLoadersImplementationMethods: () =>
      import(
        "@/components/vuetifyComponents/skeleton-loaders/SkeletonLoadersImplementationMethods"
      )
  }
};
</script>
