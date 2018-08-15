<template>
	<div class="menu">
		<div
			:class="{active: menuActive}"
			class="toggle-menu"
			@click="toggleMenu()">
			<span/>
		</div>
		<ul
			:class="{active: menuActive}"
			class="anchor-list">
			<li
				v-for="link in links"
				:key="link.label">
				<scroller :to="link.link">{{ link.label }}</scroller>
			</li>
		</ul>
	</div>
</template>

<script>
import Scroller from "~/components/Scroller.vue"

export default {
	components: {
		Scroller
	},
	data() {
		return {
			menuActive: false,
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
	},
	methods: {
		toggleMenu() {
			this.menuActive = !this.menuActive;
		}
	}
}
</script>

<style lang="scss">
.anchor-list {
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.8);
	transform: translate3d(100%, 0, 0);
	transition: transform 0.4s ease-in-out;
	padding-top: 5em;

	text-transform: uppercase;
	&.active {
		transform: translate3d(0, 0, 0);
	}
	a {
		display: block;
		padding: 1em 2em;
		&:hover,
		&.active {
			color: white;
			background-color: $color-semi-transparent;
		}
		&:focus {
			color: white;
		}
	}
	@include respond-to(large) {
		position: static;
		height: auto;
		background-color: transparent;
		transform: none;
		transition: none;
		display: flex;
		flex-wrap: wrap;
		padding-top: 0;
		li:not(:first-child) {
			margin-left: 0.4em;
		}
		a {
			border-radius: $border-radius;
			padding: 0.6em 1em;
		}
	}
}
.toggle-menu {
	position: relative;
	z-index: 1;
	font-size: 18px;
	padding: 1em 0.5em;
	transition: all 0.3s;
	cursor: pointer;
	@include respond-to(large) {
		display: none;
	}
	&::before,
	&::after {
		content: "";
	}
	span,
	&::before,
	&::after {
		display: block;
		position: relative;
		height: 6px;
		background-color: white;
		border-radius: 3px;
		margin-bottom: 6px;
		transition: all 0.3s ease-in-out;
	}
	&::before {
		width: 1.5em;
	}
	span {
		width: 2.775em;
	}
	&::after {
		transition-delay: 0.3s;
		width: 2.4em;
		margin-bottom: 0;
	}
	&:hover {
		&::before,
		&::after {
			width: 2.775em;
		}
	}
	&.active {
		background-color: $color-semi-transparent;
		&::before {
			transform: translate3d(0, -12px, 0);
			opacity: 0;
		}
		span {
			transform: rotate(45deg);
		}
		&::after {
			width: 2.775em;
			transform: rotate(-45deg) translate3d(8px, -8px, 0);
		}
		&:hover {
			opacity: 0.7;
		}
	}
}
</style>
