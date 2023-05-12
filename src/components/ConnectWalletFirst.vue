<script setup lang="ts">
import EthersService from '@/services/ethers.service'
import { useRouter } from "vue-router"
import { ref } from 'vue'
const connectwalletDia = ref(false)
const isWalletConnecting = ref(false)

const router = useRouter()
const isNoMetaMask = ref(false)

function validMetamaskCheck() {
    if (typeof window.ethereum === 'undefined') {
        console.log('MetaMask is not installed!')
        isNoMetaMask.value = true
    }
}

async function chainCheck() {
    return await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }],
    })
}

function connectWallet() {
    return new Promise((resolve, reject) => {
        if (typeof window.ethereum !== "undefined") {
            isWalletConnecting.value = true
            window.ethereum.request({ method: 'eth_requestAccounts' }).then((accounts: Array<string>) => {
                const account = accounts[0]
                if (account) {
                    chainCheck().then(() => {
                        EthersService.setStorageWalletAddress(account)
                        isWalletConnecting.value = false
                        connectwalletDia.value = false
                        resolve(router.go(0))
                    }).catch(() => {
                        EthersService.disconnect()
                        console.error("Wrong Chain")
                        reject()
                    })
                } else {
                    EthersService.disconnect()
                    console.error("No account")
                    reject()
                }
            }).catch((err: any) => {
                EthersService.disconnect()
                reject(err)
            })
        } else {
            console.log("No Web3 Plugin")
            EthersService.disconnect()
            reject()
        }
    })
}

if (!EthersService.isAddress(EthersService.walletAddress())) {
    connectwalletDia.value = true
}

validMetamaskCheck()
EthersService.switchNetwork()
</script>

<template>
    <v-dialog v-model="connectwalletDia" activator="parent" style="width: 400px;" persistent>
        <v-card style="border-radius: 15px;" v-if="isNoMetaMask">
            <v-card-text align="center">
                {{ $t("You-Have-No-Metamask") }}
            </v-card-text>
            <v-card-text>
                {{ $t("If-You-Are-on-PC") }} :
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block variant="text">
                    <a href="https://metamask.io/" target="_blank">
                        <h3>{{ $t("Install-Metamask-Then-Refresh") }}</h3>
                    </a>
                </v-btn>
            </v-card-actions>
            <v-card-actions>
                <v-btn color="primary" block :disabled="true">
                    <h3>{{ $t("Connect-via-Email") }} (Comming Soon)</h3>
                </v-btn>
            </v-card-actions>
            <v-card-text>
                {{ $t("If-You-Are-on-Mobile") }} :</v-card-text>
            <v-card-actions>
                <v-btn color="primary" block variant="text">
                    <a href="https://metamask.io/" target="_blank">
                        <h3>{{ $t("Install-Metamask-Then-Open-in-the-App") }}</h3>
                    </a>
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card style="border-radius: 15px;" v-else>
            <v-card-text>
                {{ $t("Please-Select-A-Connect-Method") }} :
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="connectWallet()">
                    <h3>{{ $t("Connect-with-Metamask") }}</h3>
                </v-btn>
            </v-card-actions>
            <v-card-actions>
                <v-btn color="primary" block :disabled="true">
                    <h3>{{ $t("Connect-via-Email") }} (Comming Soon)</h3>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>