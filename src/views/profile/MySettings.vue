<script setup lang="ts">
import { ref } from "vue"
import BaseCard from "@/components/BaseCard.vue"
import DotLoader from 'vue-spinner/src/DotLoader.vue'
import { useDiscordStore } from "@/stores/discord"
import { useUserStore } from "@/stores/user"
import type { User } from "@/types/user"
import EthersService from "@/services/ethers.service"
import ConnectWalletFirst from "@/components/ConnectWalletFirst.vue"
import firebaseConfig from "@/plugins/firebase"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite'

console.log('firebaseConfig:', firebaseConfig)

function isValidEmail(email: string) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider()

const discordStore = useDiscordStore()
const userStore = useUserStore()

const emptyAccouts = {
    _id: "",
    wallet: "",
    email: "",
    nickname: "",
    discord: {
        name: "",
        id: "",
    },
    google: {
        email: "",
        name: "",
        id: "",
    },
    twitter: {
        handle: "",
        name: "",
        id: "",
    },
    telegram: {
        handle: "",
        name: "",
        id: "",
    },
    wechat: {
        name: "",
        id: "",
    },
}

const myAccount = ref(JSON.parse(JSON.stringify(emptyAccouts)))
const originalAccount = ref(JSON.parse(JSON.stringify(emptyAccouts)))

const tabs = ref([
    {
        title: "Account-Setting"
    },
    // {
    //     title: "Interested-Tags"
    // },
    // {
    //     title: "Notification-Setting"
    // },
    // {
    //     title: "General-Setting"
    // }
])
const tab = ref(tabs.value[0].title)

async function connectGoogle() {
    try {
        isUpdating.value.google = true
        const results = await signInWithPopup(auth, googleProvider)
        myAccount.value.google = {
            email: results.user.email,
            name: results.user.displayName,
            id: results.user.uid
        }
        await signOut(auth)
        const newUser = await userStore.updateUserProfile({
            wallet: myAccount.value.wallet,
            google: myAccount.value.google,
        })
        setUserAccounts(newUser)
        isUpdating.value.google = false
    } catch (e) {
        console.error(e)
        isUpdating.value.google = false
    }
}

async function connectTwitter() {
    try {
        isUpdating.value.twitter = true
        const results = await signInWithPopup(auth, twitterProvider)
        console.log('results::', results)
        console.log('results[_tokenResponse].screenName::', results['_tokenResponse'].screenName)
        myAccount.value.twitter = {
            handle: results['_tokenResponse'].screenName,
            name: results.user.displayName,
            id: results.user.uid
        }
        await signOut(auth)
        const newUser = await userStore.updateUserProfile({
            wallet: myAccount.value.wallet,
            twitter: myAccount.value.twitter,
        })
        setUserAccounts(newUser)
        isUpdating.value.twitter = false
    } catch (e) {
        console.error(e)
        isUpdating.value.twitter = false
    }
}

function connectDiscord() {
    isUpdating.value.discord = true
    window.location.href = discordStore.getDiscordAuthLink()
    // window.open(this.discordService.getDiscordAuthLink(), "_blank")
}

async function discordAuthCheck() {
    const data = window.location.href.split("#")
    const searchParams = new URLSearchParams(data[1])
    const params = Object.fromEntries([...searchParams])
    const auth = JSON.parse(JSON.stringify(params))
    if (auth.access_token) {
        isUpdating.value.discord = true
        try {
            const user = await discordStore.getUser(auth.token_type, auth.access_token)
            myAccount.value.discord = { name: "", id: "" }
            if (user.id) {
                myAccount.value.discord.name = `${user.username}#${user.discriminator}`
                myAccount.value.discord.id = user.id
                const newUser = await userStore.updateUserProfile({
                    wallet: myAccount.value.wallet,
                    discord: myAccount.value.discord,
                })
                setUserAccounts(newUser)
                isUpdating.value.discord = false
            }
        } catch (e) {
            console.error(e)
            isUpdating.value.discord = false
        }
    }
}

const discordStr = ref("")
const googleStr = ref("")
const twitterStr = ref("")
const telegramStr = ref("")
const wechatStr = ref("")
const isUpdating = ref({
    nickname: false,
    email: false,
    discord: false,
    google: false,
    twitter: false,
    telegram: false,
    wechat: false,
})

function updateTelegram() {
    console.log('telegramStr:', telegramStr.value)
    console.log('myAccount.value.wallet:', myAccount.value.wallet)
    console.log('myAccount.value._id:', myAccount.value._id)
    if (telegramStr.value !== "") {
        isUpdating.value.telegram = true
        userStore.updateUserProfile({
            wallet: myAccount.value.wallet, telegram: {
                handle: telegramStr.value,
                name: telegramStr.value,
                id: `${myAccount.value._id}#telegram`
            }
        } as Partial<User>).then((user) => {
            setUserAccounts(user)
            isUpdating.value.telegram = false
        })
    }
}

function updateNickname() {
    if (myAccount.value.nickname !== "") {
        isUpdating.value.nickname = true
        userStore.updateUserProfile({
            wallet: myAccount.value.wallet,
            nickname: myAccount.value.nickname
        } as Partial<User>).then((user) => {
            setUserAccounts(user)
            isUpdating.value.nickname = false
        })
    }
}

function updateEmail() {
    if (myAccount.value.email !== "") {
        isUpdating.value.email = true
        userStore.updateUserProfile({
            wallet: myAccount.value.wallet,
            email: myAccount.value.email
        } as Partial<User>).then((user) => {
            setUserAccounts(user)
            isUpdating.value.email = false
        })
    }
}

function uppdateWechat() {
    if (wechatStr.value !== "") {
        isUpdating.value.wechat = true
        userStore.updateUserProfile({
            wallet: myAccount.value.wallet, wechat: {
                name: wechatStr.value,
                id: `${myAccount.value._id}#wechat`
            }
        } as Partial<User>).then((user) => {
            setUserAccounts(user)
            isUpdating.value.wechat = false
        })
    }
}

function setUserAccounts(user: any) {
    myAccount.value._id = user._id
    myAccount.value.wallet = user.wallet
    myAccount.value.email = user.email
    myAccount.value.nickname = user.nickname
    myAccount.value.discord = user.discord
    myAccount.value.google = user.google
    myAccount.value.twitter = user.twitter
    myAccount.value.telegram = user.telegram
    myAccount.value.wechat = user.wechat
    if (myAccount.value.discord) {
        discordStr.value = `${myAccount.value.discord.name}`
    }
    if (myAccount.value.google) {
        googleStr.value = myAccount.value.google.name ? `${myAccount.value.google.name} (${myAccount.value.google.email})` : ""
    }
    if (myAccount.value.twitter) {
        twitterStr.value = myAccount.value.twitter.name ? `${myAccount.value.twitter.name} (@${myAccount.value.twitter.handle})` : ""
    }
    if (myAccount.value.telegram) {
        telegramStr.value = `${myAccount.value.telegram.handle}`
    }
    if (myAccount.value.wechat) {
        wechatStr.value = `${myAccount.value.wechat.name}`
    }
    originalAccount.value = JSON.parse(JSON.stringify(myAccount.value))
}

if (EthersService.walletAddress()) {
    userStore.fetchWalletUser().then((user) => {
        setUserAccounts(user)
    })
    discordAuthCheck()
}

</script>

<template>
    <ConnectWalletFirst v-if="!EthersService.isAddress(EthersService.walletAddress())" />
    <v-row v-else>
        <v-col cols="12" sm="12" lg="12">
            <BaseCard :heading="$t('My-Settings')">
                <v-tabs v-model="tab" background-color="secondary" class="d-flex align-center" center-active>
                    <v-tab v-for="(setting, index) in tabs">{{ $t(setting.title) }}</v-tab>
                </v-tabs>
                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item :value="0">
                            <v-row>
                                <v-col cols="12">
                                    <small>{{ $t("Please-Connect-Necessary-Account") }}</small>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field v-model="myAccount.nickname" density="compact" type="text"
                                        :label="$t('Nickname') + '*'" />
                                </v-col>
                                <v-col cols="2">
                                    <v-btn color="primary" @click="updateNickname"
                                        :disabled="isUpdating.nickname || (originalAccount.nickname === myAccount.nickname) || myAccount.nickname === ''">
                                        <DotLoader :loading="isUpdating.nickname" color="white" size="12px" />&nbsp;{{
                                            $t("Update") }}
                                    </v-btn>
                                    <v-btn variant="text">
                                        <v-icon color="grey-darken-1" class="ml-3">mdi-help-circle-outline</v-icon>
                                        <v-tooltip activator="parent" location="top">{{ $t("Why-Need-Nickname")
                                        }}</v-tooltip>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field v-model="myAccount.email" density="compact" type="text"
                                        :label="$t('E-Mail') + '*'" />
                                </v-col>
                                <v-col cols="2">
                                    <v-btn color="primary" @click="updateEmail"
                                        :disabled="isUpdating.email || !isValidEmail(myAccount.email) || (originalAccount.email === myAccount.email) || myAccount.email === ''">
                                        <DotLoader :loading="isUpdating.email" color="white" size="12px" />&nbsp;{{
                                            $t("Update") }}
                                    </v-btn>
                                    <v-btn variant="text">
                                        <v-icon color="grey-darken-1" class="ml-3">mdi-help-circle-outline</v-icon>
                                        <v-tooltip activator="parent" location="top">{{ $t("Why-Need-Email") }}</v-tooltip>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field v-model="discordStr" density="compact" type="text"
                                        :label="$t('Discord-Click-Right') + '*'" readonly />
                                </v-col>
                                <v-col cols="2">
                                    <v-btn color="secondary" @click="connectDiscord" :disabled="isUpdating.discord">
                                        <DotLoader :loading="isUpdating.discord" color="white" size="12px" />&nbsp;{{
                                            $t("Login") }}
                                    </v-btn>
                                    <v-btn variant="text">
                                        <v-icon color="grey-darken-1" class="ml-3">mdi-help-circle-outline</v-icon>
                                        <v-tooltip activator="parent" location="top">{{ $t("Why-Need-Discord")
                                        }}</v-tooltip>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field v-model="googleStr" density="compact" type="text"
                                        :label="$t('Google-Click-Right')" readonly />
                                </v-col>
                                <v-col cols="2">
                                    <v-btn color="secondary" @click="connectGoogle" :disabled="isUpdating.google">
                                        <DotLoader :loading="isUpdating.google" color="white" size="12px" />&nbsp;{{
                                            $t("Login") }}
                                    </v-btn>
                                    <v-btn variant="text">
                                        <v-icon color="grey-darken-1" class="ml-3">mdi-help-circle-outline</v-icon>
                                        <v-tooltip activator="parent" location="top">{{ $t("Why-Need-Google") }}</v-tooltip>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field v-model="twitterStr" density="compact" type="text"
                                        :label="$t('Twitter-Click-Right')" readonly />
                                </v-col>
                                <v-col cols="2">
                                    <v-btn color="secondary" @click="connectTwitter" :disabled="isUpdating.twitter">
                                        <DotLoader :loading="isUpdating.twitter" color="white" size="12px" />&nbsp;{{
                                            $t("Login") }}
                                    </v-btn>
                                    <v-btn variant="text">
                                        <v-icon color="grey-darken-1" class="ml-3">mdi-help-circle-outline</v-icon>
                                        <v-tooltip activator="parent" location="top">{{ $t("Why-Need-Twitter")
                                        }}</v-tooltip>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field v-model="telegramStr" density="compact" type="text"
                                        :label="$t('Telegram')" />
                                </v-col>
                                <v-col cols="2">
                                    <v-btn color="primary" @click="updateTelegram"
                                        :disabled="isUpdating.telegram || (originalAccount.telegram.name === telegramStr) || telegramStr === ''">
                                        <DotLoader :loading="isUpdating.telegram" color="white" size="12px" />&nbsp;{{
                                            $t("Update") }}
                                    </v-btn>
                                    <v-btn variant="text">
                                        <v-icon color="grey-darken-1" class="ml-3">mdi-help-circle-outline</v-icon>
                                        <v-tooltip activator="parent" location="top">{{ $t("Why-Need-Telegram")
                                        }}</v-tooltip>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field v-model="wechatStr" density="compact" type="text" :label="$t('Wechat')" />
                                </v-col>
                                <v-col cols="2">
                                    <v-btn color="primary" @click="uppdateWechat"
                                        :disabled="isUpdating.wechat || (originalAccount.wechat.name === wechatStr) || wechatStr === ''">
                                        <DotLoader :loading="isUpdating.wechat" color="white" size="12px" />&nbsp;{{
                                            $t("Update") }}
                                    </v-btn>
                                    <v-btn variant="text">
                                        <v-icon color="grey-darken-1" class="ml-3">mdi-help-circle-outline</v-icon>
                                        <v-tooltip activator="parent" location="top">{{ $t("Why-Need-Wechat") }}</v-tooltip>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-window-item>

                        <!-- <v-window-item :value="1">
                            Two
                        </v-window-item>

                        <v-window-item :value="2">
                            Three
                        </v-window-item> -->
                    </v-window>
                </v-card-text>
            </BaseCard>
        </v-col>
    </v-row>
</template>
