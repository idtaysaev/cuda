<template>
	<app-section
		id="banner"
		class="banner">
		<container>
			<h1>
				Hi there! We are the new kids on the block and we build awesome websites and mobile apps.
			</h1>
			<a
				href="#contact"
				class="btn">Work with us!</a>
		</container>
	</app-section>
</template>

<script>
import AppSection from "./AppSection"
export default {
	components: {
		AppSection
	}
}
</script>

<style lang="scss">
.section.banner {
	padding: 6em 0 4em;
	@include respond-to(small) {
		padding: 13.3em 0 8.1em;
	}
	background-color: $color1;
	color: white;
	text-align: center;

	h1 {
		margin-bottom: 1.1em;
	}
}
</style>
