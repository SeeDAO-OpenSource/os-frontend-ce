<script setup lang="ts">
import { ref } from "vue"
import EthersService from "@/services/ethers.service"
import { useScoreStore } from "@/stores/score"
import { useUserStore } from "@/stores/user"

const userId = ref("")
const userStore = useUserStore()
const scoreStore = useScoreStore()

async function fetchOffchainScores() {
    userId.value = userStore.walletUser?._id ? `${userStore?.walletUser._id}` : ""
    if (userId.value === "") {
        await userStore.fetchWalletUser(EthersService.walletAddress())
        userId.value = userStore.walletUser?._id ? `${userStore?.walletUser._id}` : ""
    }
    if (userId.value !== "") {
        if (scoreStore.wallet.offchainScore.registered === -1) {
            await scoreStore.fetchWalletRegisteredScore(`${userId.value}`)
        }
        if (scoreStore.wallet.offchainScore.reviewing === -1) {
            await scoreStore.fetchWalletReviewingScore(`${userId.value}`)
        }
    } else {
        scoreStore.setOffChainRegisteredScore(0)
        scoreStore.setOffChainReviewingScore(0)
    }
}

fetchOffchainScores()
</script>

<template>
    <!-- ------------------------------------ -->
    <!-- html -->
    <!-- ------------------------------------ -->
    <v-card class="overflow-hidden w-100" style="overflow-y: auto; height:270px">
        <v-card-text class="pa-7">
            <div class="d-flex align-center">
                <h2 class="title text-h6 font-weight-bold">{{ $t("Offchain-Score") }}</h2>
                <v-spacer></v-spacer>
            </div>
            <div class="d-flex align-start mt-2">
                <div>
                    <span class="text-subtitle-1 text-grey-darken-1 font-weight-bold">{{ $t("In-Review-Scores") }}</span>
                    <h2 class="title font-weight-medium">{{  scoreStore.wallet.offchainScore.reviewing >= 0 ? scoreStore.wallet.offchainScore.reviewing :  "-"}}</h2>
                </div>
                <v-spacer></v-spacer>
            </div>
            <div class="mt-10 d-flex align-start">
                <div>
                    <span class="text-subtitle-1 text-grey-darken-1 font-weight-bold">{{
                        $t("Reviewed-Offchain-Scores") }}</span>
                    <h2 class="title font-weight-medium">{{  scoreStore.wallet.offchainScore.registered >= 0 ? scoreStore.wallet.offchainScore.registered :  "-" }}</h2>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>