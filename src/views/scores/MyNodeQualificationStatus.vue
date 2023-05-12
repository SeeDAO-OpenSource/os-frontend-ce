<script setup lang="ts">
import { ref } from "vue"

const effectiveScore = ref(20000)
const effectiveScoreThreshold = ref(20000)
const scoreThisSeason = ref(0)
const scoreThisSeasonThreshold = ref(5000)
const isHoldingSGN = ref(true)

function getSGNYesNo(b: boolean){
  if(b) return "SGN-Yes"
  else return "SGN-No"
}

</script>


<template>
  <v-card class="overflow-hidden" style="overflow-y: auto; height:270px">
    <v-card-text>
      <div class="d-flex align-center">
        <h2 class="title text-h6 font-weight-bold">{{ $t("Node-Qualification") }} <small>({{ $t("Next-Season") }})</small>
        </h2>
        <v-spacer></v-spacer>
      </div>
      <!-- lists -->
      <div class="px-0">
        <div class="d-flex align-center py-1">
          <div class="ml-2">
            <h4 class="font-weight-bold text-subtitle-1 title">
              {{ $t("Effective-Score") }}
            </h4>
            <span class="
                text-grey-darken-1
                text-subtitle-2
                d-block
                text-truncate
                font-weight-regular
              "><span
                v-if="effectiveScore >= effectiveScoreThreshold">✅</span>&nbsp;{{ effectiveScore }} / {{ effectiveScoreThreshold }}</span>
          </div>
        </div>
      </div>
      <div class="px-0">
        <div class="d-flex align-center py-1">
          <div class="ml-2">
            <h4 class="font-weight-bold text-subtitle-1 title">
              {{ $t("Score-Earned-This-Season") }}
            </h4>
            <span class="
                text-grey-darken-1
                text-subtitle-2
                d-block
                text-truncate
                font-weight-regular
              "><span
                v-if="scoreThisSeason >= scoreThisSeasonThreshold">✅</span>&nbsp;{{ scoreThisSeason }} / {{ scoreThisSeasonThreshold }}</span>
          </div>
        </div>
      </div>
      <div class="px-0">
        <div class="d-flex align-center py-1">
          <div class="ml-2">
            <h4 class="font-weight-bold text-subtitle-1 title">
              {{ $t("SGN-Holder") }}
            </h4>
            <span class="
                text-grey-darken-1
                text-subtitle-2
                d-block
                text-truncate
                font-weight-regular
              "><span
                v-if="isHoldingSGN">✅</span>&nbsp;{{ $t(getSGNYesNo(isHoldingSGN)) }}</span>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
