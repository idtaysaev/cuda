<template>
	<section class="section">
		<container>
			<slot/>
		</container>
	</section>
</template>
<script>
export default {
	data() {
		return {
			rectTop: 0,
			rectBottom: 0
		}
	},
	mounted() {
		this.updateOffset();
		this.updateSection();

		document.addEventListener("scroll", this.updateSection)
		window.addEventListener("resize", this.updateAll)
	},
	methods: {
		updateOffset() {
			let rect = this.$el.getBoundingClientRect();

			this.rectTop = rect.top;
			this.rectBottom = this.rectTop + this.$el.offsetHeight;
		},
		updateSection() {
			let pageYOffset = window.pageYOffset || document.documentElement.scrollTop

			if (this.rectTop <= pageYOffset && this.rectBottom > pageYOffset) {
				if (this.$store.state.currentSection !== this.$el.id) {
					this.$store.commit("changeCurrentSection", this.$el.id)
				}
			}
		},
		updateAll() {
			this.updateOffset();
			this.updateSection();
		}
	}
}
</script>


<style lang="scss">
.section {
	padding: 6em 0 4em;
	@include respond-to(small) {
		padding: 6em 0;
	}

	min-height: 100vh;
	display: flex;
	align-items: center;
}
</style>
