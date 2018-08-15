<template>
	<a
		:href="'#'+to"
		:class="{active: $store.state.currentSection == to}">
		<slot/>
	</a>
</template>

<script>
export default {
	props: {
		to: {
			type: String,
			required: true
		}
	}
};
</script>
