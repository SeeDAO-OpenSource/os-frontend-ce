<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router"
const router = useRouter();

const windowSize = ref(window.innerWidth)
function resizeHandler() {
  windowSize.value = window.innerWidth
}

window.addEventListener("resize", resizeHandler);
</script>
<template>
  <v-card style="height: 300px">
    <img src="@/assets/images/background/welcome-bg2-2x-svg.svg" style=" position: absolute;right: 0%;width: 330px;" v-if="windowSize > 680" />
    <v-card-text>
      <h3 class="title overlay-title font-weight-bold mb-1" style="padding-top: 30px">
        {{ $t("Welcome-Message-1") }}<br />
      </h3>
      <h3 class="title overlay-title font-weight-bold mb-1" style="padding-top: 30px">
        {{ $t("Welcome-Message-2") }}<br />
      </h3>
      <v-btn color="secondary" class="mt-5" @click="router.push('/scores/my')">{{ $t("Welcome-Call-To-Action") }}</v-btn>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.overlay-title {
  position: relative;
  z-index: 1;
}
</style>
