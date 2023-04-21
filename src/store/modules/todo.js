import ToDo from '../../data/todo';


const state = {
    todo : ToDo.data
};

// getters
const getters = {

};

// mutations
const mutations = {
    taskcomplete:(state,payload)=>{
        state.todo.find(function (list) {
            if (list.id === payload) {
                return list.status = list.status === 'complete' ? 'incomplete' : 'complete';
            }
        });
    },
    alltaskcomplete:(state,payload)=>{
       state.todo.filter(function (list) {
               return list.status = payload === true ? 'complete':'incomplete';
        });
    },
    tododelete:(state,payload)=>{
        state.todo = state.todo.filter(list => list.id !== payload);
    },
    addtodo:(state,payload)=>{
        let id = state.todo.slice(-1)[0].id+1;
         state.todo.push(
            {
                'id': id,
                'title': payload,
                'delete': false,
                'status': 'incomplete'
            }
        );
    }

};

// actions
const actions = {
    taskcomplete:(context, payload) => {
        context.commit('taskcomplete',payload);
    },
    alltaskcomplete:(context,payload) => {
        context.commit('alltaskcomplete',payload);
    },
    tododelete:(context, payload) => {
        context.commit('tododelete',payload);
    },
    addtodo:(context, payload) => {
        context.commit('addtodo',payload);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};