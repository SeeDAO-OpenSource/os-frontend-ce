import { defineStore } from 'pinia'
// import type { Score } from "@/types/user"
import osapi from "@/services/osapi.service"
const API_PATH_PROPOSAL = "/api/proposals"

interface ProposalState {
    proposal: any,
    allProposals: Array<any>,
}

export const useProposalStore = defineStore('proposal', {

    state: (): ProposalState => ({
        proposal: undefined,
        allProposals: [],
    }),

    actions: {

        fetchProposalById(id: string) {
            return new Promise((resolve, reject) => {
                this.setProposal(null)
                osapi
                    .post(`${API_PATH_PROPOSAL}/find/id`, { id })
                    .then((data) => {
                        const proposal: any = data.data.data
                        this.setProposal(proposal)
                        resolve(proposal)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        queryAllProposals(select: any) {
            return new Promise((resolve, reject) => {
                osapi
                    .post(`${API_PATH_PROPOSAL}/query/all`, select)
                    .then((data) => {
                        const proposals: any = data.data.data
                        this.setAllProposals(proposals)
                        resolve(proposals)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        createProposal(proposal: any) {
            return new Promise((resolve, reject) => {
                osapi
                    .post(`${API_PATH_PROPOSAL}/create`, proposal)
                    .then((data) => {
                        const proposal: any = data.data.data
                        this.setProposal(proposal)
                        resolve(proposal)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        setProposal(proposal: any) {
            this.proposal = proposal
        },

        setAllProposals(proposals: any) {
            this.allProposals = proposals
        },

        clearBudget() {
            this.$reset()
        }
    },

    getters: {
    }
})

