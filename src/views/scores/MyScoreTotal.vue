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
scoreStore.fetchWalletOnchainScore(EthersService.walletAddress())
</script>
<template>
    <v-card class="bg-primary" style="overflow-y: auto; height:270px">
        <v-card-text>
            <div class="d-flex align-center">
                <h2 class="title text-h6 text-white font-weight-bold">{{ $t("Score-Total") }} <small>({{
                    $t("Include-Reviewed-Offchain-Score") }})</small></h2>
                <v-spacer></v-spacer>
            </div>
            <div class="d-flex align-start">
                <h2 class="font-weight-medium title text-white text-h5 mt-1">{{ Number(scoreStore.wallet.onchainScore) >= 0
                    ? `${Number(scoreStore.wallet.onchainScore) + Math.max(Number(scoreStore.wallet.offchainScore.registered), 0)}
                                    ${scoreStore.symbolShortName}` : "-" }}</h2>
            </div>
            <div class="d-flex align-center mt-10">
                <h2 class="title text-h6 text-white font-weight-bold">{{ $t("Onchain-Score") }}</h2>
                <v-spacer></v-spacer>
            </div>
            <div class="d-flex align-start">
                <h2 class="font-weight-medium title text-white text-h5 mt-1">{{ scoreStore.wallet.onchainScore >= 0 ?
                    `${scoreStore.wallet.onchainScore} ${scoreStore.symbolShortName}` : "-" }}</h2> 
            </div>
        </v-card-text>
    </v-card>
</template>