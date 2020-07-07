// project factory
import { setStore } from '../stores/projectStore';

import Vue from 'vue';
import ProjectMain from '../components/ProjectMain.vue';

const COMPONENTS = {
	'MainComponent': {
		version: 1,
		obj: ProjectMain
	}
};

/**
 *  factory
 */
class ProjectFactory {
	/**
	 * ObjectFactory initialized with objects/functions for communication with surroundings
	 */

	constructor() {
		this.store = setStore({
			state: {
			}
		})
	}

	/**
	 * Get component by it's name and element where component should be bind
	 * @param  {string} compName Name of component you want
	 * @param  {object} element  Element object (e.g. from document.querySelector('...'))
	 * @param  {object} params   Object which specified version of component
	 * @return {object}          return component object
	 */

	get(compName, mountPoint, params = {version: 1}) {
		const component = COMPONENTS[compName];
		if (typeof component !== 'undefined' && component.version === params.version) {
			return new Vue({
				render: h => h(component.obj),
				// router: this.router,
				store: this.store
			}).$mount(mountPoint)
		}
		return undefined;
	}
}

export {
	ProjectFactory
}; 