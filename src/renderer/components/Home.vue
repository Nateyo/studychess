<template>
	<div id="studychess">
		<h1>This is a page</h1>
		<router-link to='/'>Home</router-link>
		<router-link to='/hello'>Hello</router-link>
		<router-link to='/world'>World</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	import Hello from './Hello'
	import World from './World'

	export default {
		name: 'home',
		components: {
			Hello,
			World
		},
		data () {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style>
</style>
