import { db } from '@/main';

const state = {
    todo : []
};

// getters
const getters = {

};

// mutations
const mutations = {
    taskcomplete:(state,payload)=>{
        var updatestatus = '';
        state.todo.find(function (list) {
            if (list.id === payload) {
                if(list.status === 'complete'){
                    updatestatus = 'incomplete';
                } else if(list.status === 'incomplete'){
                    updatestatus = 'complete';
                }
            }
        });

        const updateRef = db.collection('todos').doc(payload);
        updateRef.update({ status:updatestatus });
    },
    alltaskcomplete:(state,payload)=>{
        var updatestatus = '';
        if(payload) {
            updatestatus = 'complete';    
        } else {
            updatestatus = 'incomplete';
        }
        state.todo.forEach(function (list) {
            const updateRef = db.collection('todos').doc(list.id);
            updateRef.update({ status:updatestatus });
        });
    },
    tododelete:(state,payload)=>{
        db.collection('todos').doc(payload).delete();
    },
    addtodo:(state,payload)=>{
        db.collection('todos').add({
            title: payload,
            delete: false,
            status: 'incomplete',
            created: new Date()
        });
    },
    retrieveTodos(state,todos){
        state.todo = todos;
    }

};

// actions
const actions = {
    retrieveTodos:(context)=>{
        db.collection('todos').get()
        .then((querySnapshot)=>{
            var tempTodos = [];

            querySnapshot.forEach((doc)=>{
                // tempTodos.push(doc.data());
                tempTodos.push({ id:doc.id, title:doc.data().title, delete:doc.data().delete, status:doc.data().status, created:doc.data().created });
            });

            var tempTodosSorted = tempTodos.sort((a,b)=>{
                return a.created.seconds - b.created.seconds;
            });

            context.commit('retrieveTodos',tempTodosSorted);
        });
    },
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