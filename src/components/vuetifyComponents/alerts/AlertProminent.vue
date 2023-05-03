<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Prominent -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The
      <span class="font-weight-bold">prominent</span>
      prop provides a more pronounced alert by increasing the height and
      applying a halo to the icon. When applying both
      <span class="font-weight-bold">prominent</span>
      and
      <span class="font-weight-bold">dense</span>
      together, the alert will take on the appearance of a normal alert but with
      the
      <span class="font-weight-bold">prominent</span>
      icon effects.
    </p>
    <div class="mt-4">
      <v-alert class="mb-3" prominent type="success">
        <template v-slot:text>
          Nunc nonummy metus. Nunc interdum lacus sit amet orci Nullam dictum
          felis eu pede.
        </template>

        <template v-slot:append>
          <v-btn size="small" color="white" variant="text">Take action</v-btn>
        </template>
      </v-alert>

      <v-alert 
        color="secondary"
        density="compact"
        icon="mdi-school"
        prominent
      >
        Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui.
        Aenean ut eros et nisl sagittis vestibulum. Sed aliquam ultrices mauris.
        Donec vitae orci sed dolor rutrum auctor.
      </v-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertProminent",

  data: () => ({}),
};
</script>