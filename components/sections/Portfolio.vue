<template>
	<content-section
		id="portfolio"
		:title="title"
		:description="description"
		class="portfolio">
		<div>
			<ul class="sections-list">
				<li
					v-for="section in sections"
					:key="section">
					<input
						:id="'section-'+section"
						:value="section"
						v-model="currentSection"
						type="radio">
					<label :for="'section-'+section">{{ section }}</label>
				</li>
			</ul>
		</div>
		<transition-group
			tag="ul"
			class="portfolio-list">
			<li
				v-for="portfolioItem in resultPortfolio"
				:key="portfolioItem.id"
				class="portfolio-item">
				<div class="img-container">
					<img
						:src="portfolioItem.img"
						:alt="portfolioItem.title">
				</div>
				<h3 class="portfolio-item-title">
					{{ portfolioItem.title }}
				</h3>
			</li>
		</transition-group>
		<button
			v-if="itemsShown < numberOfCurrentSection"
			@click="more">Load more projects</button>
	</content-section>
</template>

<script>
import ContentSection from "./ContentSection"
export default {
	components: {
		ContentSection
	},
	data() {
		return {
			title: "Our portfolio",
			description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velid, sed quia nom nunquam.",
			portfolio: [
				{
					id: 1,
					img: require("~/assets/img/portfolio/isometric.png"),
					title: "Isometric perspective mock-up",
					section: "web"
				},
				{
					id: 2,
					img: require("~/assets/img/portfolio/time-zone.png"),
					title: "Time zone app UI",
					section: "web"
				},
				{
					id: 3,
					img: require("~/assets/img/portfolio/viro.png"),
					title: "Viro media players UI",
					section: "apps"
				},
				{
					id: 4,
					img: require("~/assets/img/portfolio/blog.png"),
					title: "Blog / Magazine flat UI Kit",
					section: "icons"
				},
				{
					id: 5,
					img: require("~/assets/img/portfolio/isometric.png"),
					title: "Isometric perspective mock-up",
					section: "web"
				},
				{
					id: 6,
					img: require("~/assets/img/portfolio/time-zone.png"),
					title: "Time zone app UI",
					section: "web"
				},
				{
					id: 7,
					img: require("~/assets/img/portfolio/viro.png"),
					title: "Viro media players UI",
					section: "apps"
				},
				{
					id: 8,
					img: require("~/assets/img/portfolio/blog.png"),
					title: "Blog / Magazine flat UI Kit",
					section: "icons"
				},
				{
					id: 9,
					img: require("~/assets/img/portfolio/isometric.png"),
					title: "Isometric perspective mock-up",
					section: "web"
				},
				{
					id: 10,
					img: require("~/assets/img/portfolio/time-zone.png"),
					title: "Time zone app UI",
					section: "web"
				},
				{
					id: 11,
					img: require("~/assets/img/portfolio/viro.png"),
					title: "Viro media players UI",
					section: "apps"
				},
				{
					id: 12,
					img: require("~/assets/img/portfolio/blog.png"),
					title: "Blog / Magazine flat UI Kit",
					section: "icons"
				}
			],
			sections: [
				"all",
				"web",
				"apps",
				"icons"
			],
			currentSection: "all",
			itemsShown: 4
		}
	},
	computed: {
		resultPortfolio() {
			return this.filteredPortfolio.slice(0, this.itemsShown)
		},
		filteredPortfolio() {
			if (this.currentSection === "all") return this.portfolio
			return this.portfolio.filter(el => el.section === this.currentSection)
		},
		numberOfCurrentSection() {
			return this.filteredPortfolio.length
		}
	},
	methods: {
		more() {
			this.itemsShown += 4
		}
	}
}
</script>

<style lang="scss">
.portfolio {
	background-color: $color4;
	color: $color-text-dark;
	text-align: center;

	.content-section-top {
		p {
			max-width: 600px;
			margin: 0 auto;
		}
	}
}
.sections-list {
	margin-bottom: 3.6em;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	li {
		margin: 0 0.4em 0.4em;
	}
}
.portfolio-item {
	margin-bottom: 2em;
	&:last-child {
		margin-bottom: 0;
	}
	.img-container {
		margin-bottom: 1em;
	}

	.portfolio-item-title {
		font-size: $font-size-regular;
		font-weight: $font-weight-regular;
	}

	&.v-leave-to,
	&.v-leave-active {
		display: none;
	}

	// & + .v-enter-active {
	// 	& + .v-enter-active {
	// 		animation-delay: 0.4s;
	// 		& + .v-enter-active {
	// 			animation-delay: 0.8s;
	// 			& + .v-enter-active {
	// 				animation-delay: 1.2s;
	// 			}
	// 		}
	// 	}
	// }
}
.portfolio-list {
	margin-bottom: 4em;
	@include respond-to(medium) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.portfolio-item {
			width: 45%;
			width: calc(50% - 1em);

			&:nth-last-child(2) {
				margin-bottom: 0;
			}
		}
	}
}
</style>
