import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () => new Vuex.Store({

	mutations: {
		changeCurrentSection(state, data) {

			state.currentSection = data;

		}
	},
	state: {
		currentSection: "banner"
	}
});

export default store;
