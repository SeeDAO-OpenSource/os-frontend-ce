<script setup lang="ts">
import AvatarService from "@/services/avatar.service"
import EthersService from "@/services/ethers.service"
import { ref, watch } from "vue"
import { useCustomizerStore } from "../../../stores/customizer"
import { message, notification, profile } from "./data"
import { useUserStore } from '@/stores/user'
import { useI18n } from 'vue-i18n'
import { CACHE_LOCALE } from "@/plugins/i18n"
import { useRouter } from "vue-router"

const { locale } = useI18n()
const router = useRouter()
const handleChangeLanguage = (e: { name: string, value: string }) => {
  locale.value = e.value
  localStorage.setItem(CACHE_LOCALE, locale.value)
}

const isNoMetaMask = ref(false)

function validMetamaskCheck() {
  if (typeof window.ethereum === 'undefined') {
    console.log('MetaMask is not installed!')
    isNoMetaMask.value = true
  }
}

const userStore = useUserStore()

const customizer = useCustomizerStore()

function getLocaleAbbr() {
  if (locale.value === 'en_US') {
    return 'EN'
  } else {
    return 'CN'
  }

}

const isWalletConnecting = ref(false)
const isWalletConnected = ref(false)
const connectwalletDia = ref(false)
const showSearch = ref(false)
const href = ref(undefined)
const messages = ref(message)
const notifications = ref(notification)
const userprofile = ref(profile)
const priority = ref(customizer.setHorizontalLayout ? 0 : 0)
const languages = ref([{
  name: 'English (US)',
  value: 'en_US',
},
{
  name: '简体中文',
  value: 'zh_CN',
}])

function searchbox() {
  showSearch.value = !showSearch.value
}
watch(priority, (newPriority) => {
  priority.value = newPriority
})

async function checkWalletConnection() {
  if (await EthersService.isWalletConnected()) {
    isWalletConnected.value = true
    const user = await userStore.fetchWalletUser(`${EthersService.walletAddress()}`)
  }
}
checkWalletConnection()

function getUserAvatar(size: number) {
  return AvatarService.getAvatar(`${EthersService.walletAddress()}`, size)
}

function setDarkTheme(isDark: boolean) {
  customizer.darktheme = isDark
}

function disconnect() {
  EthersService.disconnect()
  isWalletConnected.value = false
}

async function chainCheck() {
  await window.ethereum.request({
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
          EthersService.setStorageWalletAddress(account)
          chainCheck().then(() => {      
            isWalletConnecting.value = false
            connectwalletDia.value = false      
            resolve(router.go(0))
          }).catch(() => {
            EthersService.disconnect()
            console.error("Wrong chain")
            reject()
          })
        } else {
          console.log('456')
          EthersService.disconnect()
          console.error("No account")
          reject()
        }
      }).catch((err: any) => {
        console.log('456')
        EthersService.disconnect()
        reject(err)
      })
    } else {
      console.log("No Web3 Plugin")
      console.log('456')
      EthersService.disconnect()
      reject()
    }
  })
}

validMetamaskCheck()
EthersService.switchNetwork()
</script>

<style>       hr {
         height: 1px;
         background-color: #eee;
         border: none;
       }
</style>

<template>
  <v-app-bar :color="customizer.darktheme ? '' : customizer.navbarColor" elevation="0" :priority="priority" :class="[
    'v-topbar',
    customizer.navbarColor == '#f6f6f6' ? '' : 'text-white',
  ]">
    <v-btn class="hidden-sm-and-down" color="inherit" icon
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)">
      <vue-feather type="menu" size="16"></vue-feather>
    </v-btn>

    <!-- <v-app-bar-nav-icon
      class="hidden-sm-and-down"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
    /> -->
    <v-app-bar-nav-icon color="inherit" class="hidden-md-and-up" @click.stop="customizer.SET_SIDEBAR_DRAWER" />
    <!-- ---------------------------------------------- -->
    <!---Search part -->
    <!-- ---------------------------------------------- -->

    <!-- <v-btn text icon color="lighten-2" @click="searchbox">
      <vue-feather type="search" class="feather-sm"></vue-feather>
    </v-btn>
    <v-sheet v-if="showSearch" class="searchinput pa-2" elevation="10">
      <v-text-field
        color="success"
        label="Search"
        placeholder="Search Now"
        variant="outlined"
        append-icon="mdi-close"
        density="compact"
        single-line
        class="mt-5"
        @click:append="searchbox"
      ></v-text-field>
    </v-sheet> -->
    <!---/Search part -->

    <v-spacer />
    <!-- ---------------------------------------------- -->
    <!---right part -->
    <!-- ---------------------------------------------- -->

    <!-- ---------------------------------------------- -->
    <!-- Messages -->
    <!-- ---------------------------------------------- -->
    <v-menu anchor="bottom end" origin="auto" max-width="300">
      <template v-slot:activator="{ props }">
        <v-btn color="inherit" @click="setDarkTheme(true)" icon v-if="!customizer.darktheme">
          <vue-feather type="moon" class="feather-sm" />
        </v-btn>
        <v-btn color="inherit" @click="setDarkTheme(false)" icon v-else>
          <vue-feather type="sun" class="feather-sm" />
        </v-btn>
      </template>
    </v-menu>


    <v-menu anchor="bottom end" origin="auto" max-width="300">
      <template v-slot:activator="{ props }">
        <v-btn color="inherit" icon v-bind="props">
          {{ getLocaleAbbr() }}
        </v-btn>
      </template>

      <v-list class="pa-2" elevation="10" rounded="lg">
        <v-list-item v-for="(lang, i) in languages" class="my-2 pa-3" :key="`lang${i}`" rounded="lg" :value="lang"
          @click="handleChangeLanguage(lang)" :title="lang.name" />
      </v-list>
    </v-menu>

    <div class="ml-5 mr-7" v-if="!isWalletConnected">
      <v-btn color="secondary" size="large" rounded="lg" variant="elevated">
        <h3>{{ $t("Connect-Wallet") }}</h3>
        <v-dialog v-model="connectwalletDia" activator="parent" style="width: 400px;">
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
      </v-btn>
    </div>

    <!-- ---------------------------------------------- -->
    <!-- Messages -->
    <!-- ---------------------------------------------- -->
    <!-- <v-menu anchor="bottom end" origin="auto" max-width="300" v-if="isWalletConnected">

      <template v-slot:activator="{ props }">
        <v-btn color="inherit" icon v-bind="props">
          <v-badge color="secondary" dot>
            <vue-feather type="message-square" class="feather-sm"></vue-feather>
          </v-badge>
        </v-btn>
      </template>

      <v-list class="pa-5" elevation="10" rounded="lg">
        <h4 class="d-flex">
          Messages
          <v-chip label small color="secondary" class="ml-auto"> 5 new </v-chip>
        </h4>

        <v-list-item v-for="(item, i) in messages" class="my-2 pa-3" :key="i" rounded="lg" :value="item" @click="href"
          :title="item.title" :subtitle="item.desc">
          <template v-slot:prepend>
            <v-avatar size="50">
              <v-img :src="getUserAvatar(50)" :alt="item.image" width="50"></v-img></v-avatar>
          </template>
        </v-list-item>
        <v-btn variant="flat" color="primary" class="mt-4" block>See all Messages</v-btn>
      </v-list>
    </v-menu> -->

    <!-- ---------------------------------------------- -->
    <!-- Notification -->
    <!-- ---------------------------------------------- -->
    <!-- <v-menu anchor="bottom end" origin="auto" v-if="isWalletConnected">
      <template v-slot:activator="{ props }">
        <v-btn color="inherit" icon v-bind="props">
          <v-badge color="primary" dot>
            <vue-feather type="bell" class="feather-sm"></vue-feather>
          </v-badge>
        </v-btn>
      </template>

      <v-list class="pa-6" elevation="10" rounded="lg" max-width="300">
        <h4 class="d-flex">
          Notifications
          <v-chip class="ml-auto" label small color="error"> 5 new </v-chip>
        </h4>
        <v-list-item class="pa-3 mt-2" v-for="(item, i) in notifications" :key="i" :value="item" @click="href"
          rounded="lg" :title="item.title" :subtitle="item.desc">
          <template v-slot:prepend>
            <v-avatar :color="item.color">
              <vue-feather :type="item.icon" size="18"></vue-feather>
            </v-avatar>
          </template>
        </v-list-item>
        <v-btn block variant="flat" color="secondary" class="mt-4 py-4">See all Notifications</v-btn>
      </v-list>
    </v-menu> -->

    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <v-menu anchor="bottom end" origin="auto" min-width="300" v-if="isWalletConnected">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="pa-0 px-1" elevation="0" color="transparent" plain :ripple="false">
          <v-avatar size="35">
            <img :src="getUserAvatar(35)" alt="Julia" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list class="pa-6" elevation="10" rounded="lg" min-width="280">
        <div class="d-flex align-center">
          <img :src="getUserAvatar(60)" alt="Avatar" class="rounded-circle" width="60" />
          <div class="ml-4">
            <h4 class="font-weight-medium fs-18">{{ userStore.getNickname() }}</h4>
            <span class="subtitle-2 font-weight-light">{{ EthersService.shortWalletAddress(undefined) }}</span>
            <!-- <div class="d-flex">
              <span class="subtitle-2 font-weight-light"><small>Level 2</small></span>
            </div> -->
          </div>
        </div>
        <hr class="text-gray-300 mt-2 mb-2" />
        <!-- <v-list-item class="pa-3 mb-2" v-for="(item, i) in userprofile" :key="i" :to="item.to" :value="item"
          :title="$t(item.title)" :subtitle="$t(item.desc)" rounded="lg">
          <template v-slot:prepend>
            <v-list-item-avatar start>
              <v-btn :color="item.color" variant="flat" icon elevation="0" size="small" class="mr-3">
                <vue-feather :type="item.icon" size="18"></vue-feather>
              </v-btn>
            </v-list-item-avatar>
          </template>
        </v-list-item> -->
        <v-btn block color="secondary" @click="disconnect()" variant="flat" class="mt-4 py-4">{{ $t("Logout") }}</v-btn>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
