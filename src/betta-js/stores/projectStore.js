// projectStore.js

import Vue from 'vue';
import Vuex from 'vuex';

import DirectusSDK from "@directus/sdk-js";
const client = new DirectusSDK({
	url: 'http://directus.recycles.cz',
	project: 'betta'
});

Vue.use(Vuex);

export function setStore(config) {
	return new Vuex.Store ({
		strict: true,
		state : {
			...config.state,
		},
		getters: {
			// ...config.getters,
			// translate: (state) => (trnsl, ...val) => {
			// 	return state.translate(trnsl, ...val);
			// },
			// webLinks: (state) => (linkKey, hash) => {
			// 	return state.webLinks.getLink(linkKey, {hash});
			// },
			// regionShow: (state) => () => { // limit language regions for content display
			// 	const limit = ['en'];
			// 	return limit.findIndex(loc => loc === state.locale.split('-')[0]) > -1;
			// }
		},
		mutations: {
		},
		actions: {
			async init({state}) {
				try {
					let data = await client.getCollections();
					console.log('collections data >>>', data)
				} catch(e) {
					console.log('exception >>>', e)
				}
				
			}
		}
	})
}
