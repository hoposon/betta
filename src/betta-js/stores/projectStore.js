// projectStore.js

import Vue from 'vue';
import Vuex from 'vuex';

import DirectusSDK from "@directus/sdk-js";
const client = new DirectusSDK();

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
					await client.login({
						email: 'betta@betta.com',
						password: 'betta',
						url: 'http://directus.recycles.cz',
						project: 'betta',
						storage: window.localStorage
					});
					let menus = await client.getItems('menus');
					let menusAll = await client.api.get("/items/menus?fields=*.*.*");
					console.log('menusAll items >>> ', menusAll);
					let pages = await client.getItems('pages');
					let menusJunc = await client.getItems('menus_junction');
					console.log('menus items >>>', menus)
					console.log('pages items >>> ', pages);
					console.log('menusJunc items >>> ', menusJunc);

					let kolekce = await client.getItems('kolekce');
					console.log('kolekce items >>> ', kolekce);
					let kolekceAll = await client.api.get("/items/kolekce?fields=*.*.*");
					console.log('kolekceAll items >>> ', kolekceAll);


				} catch(e) {
					console.log('exception >>>', e)
				}
				
			}
		}
	})
}
