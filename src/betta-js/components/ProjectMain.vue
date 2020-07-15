// ProjectMain.vue - main component

<template>
	<div id='betta' class="app">
		test
	</div>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: 'ProjectMain',
		components: {
		},
		data() {
			return {
			}
		},
		computed: {
			// ...mapState([
			// ])
		},
		methods: {
			// translate(lngId, ...args) {
			// 	return this.$store.getters.translate(lngId, ...args);
			// }
			...mapActions([
				'init'
			])
		},
		async created() {
			this.init();
		}
	}
</script> 