import Courses from '../../data/courses';


const state = {
	courses : Courses.courses
};

// getters
const getters = {
	specialcourses: state =>{
		return state.courses.filter((course) => {
			if (course.special === 1)
                return course;
		});
	},
	normalcourses: state =>{
		return state.courses.filter((course) => {
			if (course.special === 0)
                return course;
		});
	}
};

// mutations
const mutations = {
};

// actions
const actions = {
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};