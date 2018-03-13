<template>
    <div class='admin'>
        <my-header></my-header>
        <div class='admin-main'>
			<submenu></submenu>
			<div class='admin-main-left'>
				<div id="toFill" v-html="{mods}"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from './common/header.vue';
	import Submenu from './common/submenu.vue';
	export default {
		name: 'admin',
		props: ['mods'],
		components: {
			'my-header': Header,
			'submenu': Submenu
		},

		computed: {
			user() {
				return this.$store.state.user;
			},
		},

		methods: {
			// 跳转控制
			controlJump(target) {
				if (this.user.role < 10) {
					this.$message.warning('权限不够，努力升级');

				} else {
					this.$router.push(target);
				}

			}
		},
		data() {
			return {
				
			}
		}

	}

</script>
