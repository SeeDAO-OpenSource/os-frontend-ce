import api from "@/services/api.service"
const API_PATH_EVENT = "/api/events"

// action types
export const UPDATE_EVENT = "updateEvent"
export const DELETE_EVENT = "deleteEvent"
export const REGISTER_EVENT = "registerEvent"
export const FETCH_INTERESTED_EVENTS = "fetchInterestedEvents"
export const CREATE_EVENT = "createEvent"
export const FETCH_ONGOING_EVENT = "fetchOngoingEvent"
export const FETCH_ALL_EVENT = "fetchAllEvent"
export const FETCH_NOTCLOSED_EVENT = "fetchNotclosedEvent"
export const FETCH_EVENT_BY_ID = "fetchEventById"

// mutation types
export const SET_NOTCLOSED_EVENT = "setNotclosedEvent"
export const SET_ONGOING_EVENT = "setOngoingEvent"
export const SET_ALL_EVENT = "setAllEvent"
export const SET_EVENT_BY_ID = "setEventById"
export const SET_INTERESTED_EVENTS = "setInerestedEventㄋ"
export const CLEAR_SINGLE_EVENT = "clearSingleEvent"

// getter types
export const GET_NOTCLOSED_EVENT = "getNotclosedEvent"
export const GET_ONGOING_EVENT = "getOngoingEvent"
export const GET_INTERESTED_EVENTS = "getInerestedEvents"
export const GET_ALL_EVENT = "getAllEvent"
export const GET_EVENT_BY_ID = "getEventById"

const state = {
  emptyEvent: {
    image: "",
    where: "",
    location: "",
    title: "",
    interested: [],
    attendees: [],
    hosts: [],
    description: ""
  },
  eventLastCreated: null,
  level: 0,
  interestedEvents: [],
  notClosedEvents: [],
  ongoingEvents: [],
  allEvents: [],
  singleEvent: {
    image: "",
    where: "",
    location: "",
    title: "",
    interested: [],
    attendees: [],
    hosts: [],
    description: ""
  }
}

const getters = {
  [GET_INTERESTED_EVENTS](state) {
    return state.interestedEvents
  },
  [GET_EVENT_BY_ID](state) {
    return state.singleEvent
  },
  [GET_NOTCLOSED_EVENT](state) {
    return state.notClosedEvents
  },
  [GET_ONGOING_EVENT](state) {
    return state.ongoingEvents
  },
  [GET_ALL_EVENT](state) {
    return state.allEvents
  }
}

const actions = {
  [FETCH_INTERESTED_EVENTS](context, userId) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_EVENT}/find/interested`, { userId })
        .then((data) => {
          console.log("data::", data)
          context.commit(SET_INTERESTED_EVENTS, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  [REGISTER_EVENT](context, register) {
    return new Promise((resolve, reject) => {
      context.commit(CLEAR_SINGLE_EVENT)
      api
        .post(`${API_PATH_EVENT}/register`, register)
        .then((data) => {
          console.log("data::", data)
          context.commit(SET_EVENT_BY_ID, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  [FETCH_EVENT_BY_ID](context, id) {
    return new Promise((resolve, reject) => {
      context.commit(CLEAR_SINGLE_EVENT)
      api
        .post(`${API_PATH_EVENT}/find/id`, { id })
        .then((data) => {
          console.log("data::", data)
          context.commit(SET_EVENT_BY_ID, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  [FETCH_ALL_EVENT](context, select) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_EVENT}/all`, select)
        .then((data) => {
          context.commit(SET_ALL_EVENT, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  [FETCH_ONGOING_EVENT](context, select) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_EVENT}/ongoing`, select)
        .then((data) => {
          context.commit(SET_ONGOING_EVENT, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  [FETCH_NOTCLOSED_EVENT](context, select) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_EVENT}/notclosed`, select)
        .then((data) => {
          context.commit(SET_NOTCLOSED_EVENT, data.data.data)
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  [DELETE_EVENT](context, eventId){
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_EVENT}/delete`, { eventId })
        .then(() => {
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  [UPDATE_EVENT](context, data) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_EVENT}/update`, data)
        .then((data) => {
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  [CREATE_EVENT](context, event) {
    return new Promise((resolve, reject) => {
      api
        .post(`${API_PATH_EVENT}/create`, { event })
        .then((data) => {
          resolve(data.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [CLEAR_SINGLE_EVENT](state) {
    state.singleEvent = state.emptyEvent
  },
  [SET_INTERESTED_EVENTS](state, events) {
    state.interestedEvents = events
  },
  [SET_EVENT_BY_ID](state, event) {
    state.singleEvent = state.emptyEvent
    state.singleEvent = event
  },
  [SET_NOTCLOSED_EVENT](state, events) {
    state.notClosedEvents = events
    if(Array.isArray(state.notClosedEvents)){
      state.notClosedEvents.sort((a, b) =>
            a.start < b.start ? 1 : b.start < a.start ? -1 : 0
          )
    }
    
  },
  [SET_ONGOING_EVENT](state, events) {
    state.ongoingEvents = events
    state.ongoingEvents.sort((a, b) =>
            a.start < b.start ? 1 : b.start < a.start ? -1 : 0
          )
  },
  [SET_ALL_EVENT](state, events) {
    state.allEvents = events
    state.allEvents.sort((a, b) =>
    a.start < b.start ? 1 : b.start < a.start ? -1 : 0
  )
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

/**
 * userInvited: ref
 * rolesInvited: ref
 * type: public, private / online, local
 * notification: ref
 * attendCode: string
 * status: string
 * poap: ref
 * reviews: ref
 * leads: ref
 * attendees: ref
 * interested: ref
 * contacts: ref
 * guests: ref
 * hosts: ref
 * links: refs
 * recordings: ref
 * password: string
 * location: string
 * where: string
 * episode: int
 * image: string
 * season: int,
 * series: string
 * duration: instant
 * start: instant
 * title: string
 * description: string
 *
 * title,
 * description,
 * start,
 * duration,
 * type,
 * image,
 * location,
 * password,
 * where,
 *
 *
 *
 */
