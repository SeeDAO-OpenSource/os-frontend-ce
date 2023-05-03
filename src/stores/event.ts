import { defineStore } from 'pinia'
// import type { Score } from "@/spec/user"
import osapi from "@/services/osapi.service"
const API_PATH_EVENT = "/api/events"

interface EventState {
    interested: Array<any>
    notClosed: Array<any>
    onGoing: Array<any>
    all: Array<any>
    event: any
}

export const useEventStore = defineStore('event', {

    state: (): EventState => ({
        interested: [],
        notClosed: [],
        onGoing: [],
        all: [],
        event: {
            image: "",
            where: "",
            location: "",
            title: "",
            interested: [],
            attendees: [],
            hosts: [],
            description: ""
        }
    }),

    actions: {

        getEmptyEvent() {
            return {
                image: "",
                where: "",
                location: "",
                title: "",
                interested: [],
                attendees: [],
                hosts: [],
                description: ""
            }
        },


        fetchInterestedEvents(userId: string) {
            return new Promise((resolve, reject) => {
                osapi
                    .post(`${API_PATH_EVENT}/find/interested`, { userId })
                    .then((data) => {
                        const events: any = data.data.data
                        this.setInterestedEvents(events)
                        resolve(events)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        registerEvent(register: any) {
            return new Promise((resolve, reject) => {
                this.setEvent(this.getEmptyEvent())
                osapi
                    .post(`${API_PATH_EVENT}/register`, register)
                    .then((data) => {
                        const event: any = data.data.data
                        this.setEvent(event)
                        resolve(event)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        fetchEventById(id: string) {
            return new Promise((resolve, reject) => {
                this.setEvent(this.getEmptyEvent())
                osapi
                    .post(`${API_PATH_EVENT}/find/id`, { id })
                    .then((data) => {
                        const event: any = data.data.data
                        this.setEvent(event)
                        resolve(event)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        fetchAllEvents(select: any) {
            return new Promise((resolve, reject) => {
                osapi
                    .post(`${API_PATH_EVENT}/all`, select)
                    .then((data) => {
                        const events: any = data.data.data
                        this.setAllEvents(events)
                        resolve(events)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },


        fetchOngoingEvents(select: any) {
            return new Promise((resolve, reject) => {
                osapi
                    .post(`${API_PATH_EVENT}/ongoing`, select)
                    .then((data) => {
                        const events: any = data.data.data
                        this.setOngoingEvents(events)
                        resolve(events)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        fetchNotclosedEvents(select: any) {
            return new Promise((resolve, reject) => {
                osapi
                    .post(`${API_PATH_EVENT}/notclosed`, select)
                    .then((data) => {
                        const events: any = data.data.data
                        this.setNotclosedEvents(events)
                        resolve(events)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        deleteEvent(eventId: string) {
            return new Promise((resolve, reject) => {
                osapi
                    .post(`${API_PATH_EVENT}/delete`, { eventId })
                    .then((result) => {
                        resolve(result)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        updateEvent(update: any) {
            return new Promise((resolve, reject) => {
                osapi
                    .post(`${API_PATH_EVENT}/update`, { update })
                    .then((data) => {
                        const event: any = data.data.data
                        resolve(event)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        createEvent(event: any) {
            return new Promise((resolve, reject) => {
                osapi
                    .post(`${API_PATH_EVENT}/create`, { event })
                    .then((data) => {
                        const event: any = data.data.data
                        resolve(event)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        setEvent(event: any){
            this.event = event
        },

        setInterestedEvents(events: any){
            this.interested = events
        },

        setOngoingEvents(events: any){
            this.onGoing = events
        },

        setNotclosedEvents(events: any){
            this.notClosed = events
        },

        setAllEvents(events: any){
            this.all = events
        },

        clearBudget() {
            this.$reset()
        }
    },

    getters: {
    }
})

