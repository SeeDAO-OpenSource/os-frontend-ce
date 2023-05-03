<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="windows - Vertical">
          <WindowsVertical></WindowsVertical>
        </BaseCard>

        <BaseCard heading="windows - Reverse">
          <WindowsReverse></WindowsReverse>
        </BaseCard>

        <BaseCard heading="windows - Onboarding">
          <WindowsOnboarding></WindowsOnboarding>
        </BaseCard>

        <BaseCard heading="windows - Account creation">
          <WindowsAccountCreation></WindowsAccountCreation>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Window",

  data: () => ({
    page: {
      title: "Windows"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        href: "#",
      },
      {
        text: "Windows",
        disabled: true,
        href: "#",
      }
    ]
  }),
  components: {
    WindowsVertical: () =>
      import("@/components/vuetifyComponents/windows/WindowsVertical"),
    WindowsReverse: () =>
      import("@/components/vuetifyComponents/windows/WindowsReverse"),
    WindowsOnboarding: () =>
      import("@/components/vuetifyComponents/windows/WindowsOnboarding"),
    WindowsAccountCreation: () =>
      import("@/components/vuetifyComponents/windows/WindowsAccountCreation")
  }
};
</script>
