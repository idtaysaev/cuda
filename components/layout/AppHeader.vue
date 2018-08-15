<template>
	<header class="header">
		<container>
			<div class="header-layout">
				<logo/>
				<app-menu/>
			</div>
		</container>
	</header>
</template>

<script>
import Logo from "~/components/Logo.vue"
import AppMenu from "~/components/layout/AppMenu.vue"

export default {
	components: {
		Logo,
		AppMenu
	},
	data() {
		return {
			links: [
				{
					label: "Home",
					link: "banner"
				},
				{
					label: "Services",
					link: "services"
				},
				{
					label: "Team",
					link: "team"
				},
				{
					label: "Skills",
					link: "skills"
				},
				{
					label: "Works",
					link: "portfolio"
				},
				{
					label: "About",
					link: "about"
				},
				{
					label: "Contact",
					link: "contact"
				},
			]
		}
	}
}
</script>

<style lang="scss">
.header {
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	width: 100%;
	overflow: hidden;

	background-color: $color1;
	padding: 0.2em 0;
	color: white;
}
.header-layout {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
