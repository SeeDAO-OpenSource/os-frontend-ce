import Vue from 'vue';
import Vuex from 'vuex';
// import 'es6-promise/auto';
import layout from './modules/layout';
import menu from './modules/menu';
import chat from './modules/chat';
import products from './modules/products';
import email from './modules/email';
import todo from './modules/todo';
import jobs from './modules/jobs';
import courses from './modules/courses';
import common from './modules/common';
import { alert } from './modules/alert';
import { authentication } from './modules/authentication';
import dbtoken from './modules/dbtoken';
import score from './modules/score';
import event from './modules/event';
import user from './modules/user';
import notification from './modules/notification';
import budget from './modules/budget';
import proposal from './modules/proposal';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
    },
    mutations: {
      changeLang (state, payload) {
        localStorage.setItem('currentLanguage', payload.id);
        localStorage.setItem('currentLanguageIcon', payload.icon);
        window.location.reload();
      }
    },
    actions: {
      setLang ({ commit }, payload) {
        commit('changeLang', payload);
      }
    },
    modules: {
      dbtoken,
      alert,
      authentication,
      layout,
      chat,
      score,
      menu,
      products,
      email,
      todo,
      jobs,
      courses,
      common,
      event,
      notification,
      user,
      proposal,
      budget
    }
});

