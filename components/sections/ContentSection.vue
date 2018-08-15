<template>
	<app-section class="content-section">
		<div class="content-section-top">
			<h2>{{ title }}</h2>
			<hr>
			<p>{{ description }}</p>
		</div>
		<div class="content-section-body">
			<slot/>
		</div>
	</app-section>
</template>

<script>
import AppSection from "./AppSection"
export default {
	components: {
		AppSection
	},
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	}
}
</script>


<style lang="scss">
.content-section-top {
	text-align: center;
	margin-bottom: 4.5em;
	h2 {
		letter-spacing: 2px;
	}
	p {
		margin: 0 auto;
		letter-spacing: 0.9px;
	}
}
hr {
	width: 85px;
	height: 5px;
	background-color: $color-semi-transparent;
	margin: 0.7em auto 1em;
}
</style>
