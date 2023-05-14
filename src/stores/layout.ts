import { defineStore } from 'pinia'
import type { FullRecord } from "@/types/score"

export const SCORE_FULL_RECORD = "scoreFullRecord"

interface LayoutState {
  scoreFullRecord: {
    dialog: boolean,
    loading: boolean,
    data: FullRecord | null
  }
}

export const useLayoutStore = defineStore('layout', {

  state: (): LayoutState => ({
    scoreFullRecord: {
      dialog: false,
      loading: false,
      data: null
    }
  }),

  actions: {
    setDialogVisible(name: string, isOpen: boolean) {
      if (name === SCORE_FULL_RECORD) {
        this.scoreFullRecord.dialog = isOpen
      }
    },

    setDialogLoading(name: string, isLoading: boolean) {
      if (name === SCORE_FULL_RECORD) {
        this.scoreFullRecord.loading = isLoading
      }
    },

    setDialogData(name: string, data: any) {
      if (name === SCORE_FULL_RECORD) {
        this.scoreFullRecord.data = data as FullRecord
      }
    },

    clearLayout() {
      this.$reset()
    }
  },

  getters: {
  }
})

