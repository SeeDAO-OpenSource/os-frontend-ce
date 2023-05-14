import { defineStore } from 'pinia'
// import type { Score } from "@/types/user"
import osapi from "@/services/osapi.service"
const API_PATH_BUDGET = "/api/budgets"

interface BudgetSubject {
  _id: number,
  subject: string
}

interface BudgetState {
    subjects: Array<BudgetSubject>
}

export const useBudgetStore = defineStore('budget', {

  state: (): BudgetState => ({
    subjects: []
  }),

  actions: {
    fetchBudgetSubjects(season: string): Promise<Array<BudgetSubject>> {
      return new Promise((resolve, reject) => {
        osapi
          .post(`${API_PATH_BUDGET}/query/subject`, { season })
          .then((data) => {
            const subjects: Array<BudgetSubject> = data.data.data
            this.setBudgetSubjects(subjects)
            resolve(subjects)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    setBudgetSubjects(subjects: Array<BudgetSubject>) {
      this.subjects = subjects
    },

    clearBudget() {
      this.$reset()
    }
  },

  getters: {
  }
})

