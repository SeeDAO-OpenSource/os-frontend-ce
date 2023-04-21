import bookmark from '../../data/bookmark';
import projects from '../../data/project';
import orederhistory from '../../data/orederhistory';
import Knowledgebase from '../../data/Knowledgebase';

const state = {
	bookmark : bookmark.data,
	allprojects : projects.all,
	doingprojects : projects.Doing,
	doneprojects : projects.Done,
	orederhistory : orederhistory.data,
	knowledgebasedata: Knowledgebase.data,
	knowledgebasevideo: Knowledgebase.latest_video
};

// getters
// const getters = {

// }

// mutations
const mutations = {
};

// actions
const actions = {
};

export default {
	namespaced: true,
	state,
	// getters,
	actions,
	mutations
};