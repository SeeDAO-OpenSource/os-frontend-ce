import Email from '../../data/email';


const state = {
    all:Email.data,
    emaillist: Email.data,
    activeemail: 1

};

// getters
const getters = {
    activeemail: (state) => {
        return state.all.find(email => {
            if (email.id === state.activeemail)
                return email;
        });
    },
    index: (state) => {
        return state.all.length;
    },
    send: (state) => {
        return state.all.filter(data=>{
return data.type === 'sent'? data : false;
}).length;
    },
    draft: (state) => {
        return state.all.filter(data=>{
return data.type === 'draft'? data : false;
}).length;
    },
    trash: (state) => {
        return state.all.filter(data=>{
return data.type === 'trash'? data : false;
}).length;
    },
    starred: (state) => {
        return state.all.filter(data=>{
 if(data.favourite === true) return data; 
}).length;
    }
};

// mutations
const mutations = {
    setactiveemails: (state, payload) => {
        state.activeemail = payload;
    },
    addfavorites: (state, payload) => {
        state.emaillist.find(list =>{
            if(list.id === payload){
                list.favourite = ! list.favourite;
            }
        });
    }

};

// actions
const actions = {
    setactiveemails: (context, payload) => {
        context.commit('setactiveemails',payload);
    },
    addfavorites: (context, payload) => {
        context.commit('addfavorites',payload);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};