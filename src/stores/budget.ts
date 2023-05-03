import { defineStore } from 'pinia'
// import type { Score } from "@/spec/user"
import osapi from "@/services/osapi.service"
const API_PATH_BUDGET = "/api/budgets"

interface BudgetState {
    subjects: Array<any>
}

export const useBudgetStore = defineStore('budget', {

  state: (): BudgetState => ({
    subjects: []
  }),

  actions: {
    fetchBudgetSubjects(season: string) {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_BUDGET}/query/subject`, { season })
          .then((data) => {
            const subjects: any = data.data.data
            this.setBudgetSubjects(subjects)
            resolve(subjects)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    setBudgetSubjects(subjects: any) {
      this.subjects = subjects
    },

    clearBudget() {
      this.$reset()
    }
  },

  getters: {
  }
})

