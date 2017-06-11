<template>
		<v-app id="studychess">
		<v-navigation-drawer persistent light :mini-variant.sync="mini" v-model="drawer">
		<v-list class="pa-0">
			<v-list-item>
			<v-list-tile avatar tag="div">
				<v-list-tile-avatar>
					<v-icon dark>book</v-icon>
				</v-list-tile-avatar>
				<v-list-tile-content>
					<v-list-tile-title>StudyChess</v-list-tile-title>
				</v-list-tile-content>
				<v-list-tile-action>
				<v-btn icon @click.native.stop="mini = !mini">
					<v-icon>chevron_left</v-icon>
				</v-btn>
				</v-list-tile-action>
			</v-list-tile>
			</v-list-item>
		</v-list>
		<v-list class="pt-0" dense>
			<v-divider></v-divider>
			<v-list-item v-for="item in items" :key="item">
			<v-list-tile>
				<v-list-tile-action>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>
						<router-link v-bind:to="item.link" >
							{{ item.title }}
						</router-link>
					</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			</v-list-item>
		</v-list>
		</v-navigation-drawer>
		<v-toolbar fixed class="indigo darken-4" light>
		<v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
		<v-toolbar-title></v-toolbar-title>
		</v-toolbar>
		<main>
			<router-view></router-view>
		</main>
	</v-app>
</template>

<script>
	export default {
		name: 'studychess',
		data () {
			return {
				drawer: true,
				items: [
					{ title: 'Home', icon: 'dashboard', link: '/' },
					{ title: 'Test Board', icon: 'question_answer', link: '/testBoard' }
				],
				mini: false,
				right: null
			}
		}
	}
</script>

<style>
	/* CSS */
</style>
