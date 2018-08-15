<template>
	<content-section
		id="services"
		:title="title"
		:description="description"
		class="services">
		<ul class="services-list">
			<li
				v-for="service in services"
				:key="service.title"
				class="service">
				<div class="img-container">
					<img
						:src="service.img"
						:alt="service.title">
				</div>
				<h3 class="service-title">
					{{ service.title }}
				</h3>
				<p>
					{{ service.description }}
				</p>
			</li>
		</ul>
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
			title: "Services we provide",
			description: "We are working both individuals and businesses from all over the globe to create awesome websites and applications.",
			services: [
				{
					img: require("~/assets/img/services/branding.png"),
					title: "Branding",
					description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
				},
				{
					img: require("~/assets/img/services/design.png"),
					title: "Design",
					description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
				},
				{
					img: require("~/assets/img/services/development.png"),
					title: "Development",
					description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
				},
				{
					img: require("~/assets/img/services/rocket-science.png"),
					title: "Rocket Science",
					description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
				}
			]
		}
	}
}
</script>

<style lang="scss">
.services {
	background-color: $color2;
	color: white;

	.content-section-top p {
		max-width: 610px;
	}
}
.services-list {
	text-align: center;
	@include respond-to(small) {
		display: flex;
		flex-wrap: wrap;
		.service {
			width: 50%;
			&:nth-last-child(2) {
				margin-bottom: 0;
			}
		}
	}
	@include respond-to(medium) {
		.service {
			margin-bottom: 0;
			width: 25%;
		}
	}
}
.service {
	margin-bottom: 2em;
	&:last-child {
		margin-bottom: 0;
	}
	.img-container {
		margin-bottom: 2.7em;
		height: 135px;
		img {
			max-height: 100%;
		}
	}
	p {
		padding: 0 2em;
	}
}
</style>
