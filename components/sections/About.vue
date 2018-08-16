<template>
	<content-section
		id="about"
		:title="title"
		:description="description"
		class="about">
		<ul class="testimonial-list">
			<li
				v-for="testimonial in testimonials"
				:key="testimonial.name"
				class="testimonial">
				<div class="img-container">
					<img
						:src="testimonial.img"
						:alt="testimonial.name">
				</div>
				<div>
					<p class="testimonial-body">
						<span>"</span>{{ testimonial.body }}<span>"</span>
					</p>
					<h3 class="testimonial-name">
						{{ testimonial.name }}
					</h3>
					<p class="testimonial-position">
						{{ testimonial.position }}
					</p>
				</div>
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
			title: "What people say about us",
			description: "Our clients love us!",
			testimonials: [
				{
					img: require("~/assets/img/testimonials/chanel.jpg"),
					name: "Chanel Iman",
					position: "CEO of Pinterest",
					body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi facere ut qui dicta quidem quo distinctio consectetur."
				},
				{
					img: require("~/assets/img/testimonials/adriana.jpg"),
					name: "Adriana Lima",
					position: "Founder of Instagram",
					body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi facere ut qui dicta quidem quo distinctio consectetur."
				},
				{
					img: require("~/assets/img/testimonials/anne.jpg"),
					name: "Anne Hathaway",
					position: "Lead Designer at Behance",
					body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi facere ut qui dicta quidem quo distinctio consectetur."
				},
				{
					img: require("~/assets/img/testimonials/emma.jpg"),
					name: "Emma Stone",
					position: "Co-Founder of Shazam",
					body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi facere ut qui dicta quidem quo distinctio consectetur."
				}
			]
		}
	}
}
</script>

<style lang="scss">
.about {
	background-color: $color5;
	color: white;
}
.testimonial-list {
	text-align: center;
	@include respond-to(small) {
		text-align: left;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.testimonial {
			width: 45%;
			width: calc(50% - 2em);
			&:nth-last-child(2) {
				margin-bottom: 0;
			}
		}
	}
}
.testimonial {
	margin-bottom: 4em;
	&:last-child {
		margin-bottom: 0;
	}
	.img-container {
		margin: 0 auto 2em;
		width: 95px;
		height: 95px;
		background-color: $color-grey;
		border-radius: 50%;
		overflow: hidden;
		img {
			border-radius: 50%;
		}
	}
	@include respond-to(small) {
		margin-bottom: 6em;
		display: flex;
		align-items: flex-start;

		.img-container {
			margin: 0;
			margin-right: 2.6em;
			flex-shrink: 0;
		}
	}
}
.testimonial-body {
	font-size: $font-size-large;
	letter-spacing: 2px;
	line-height: 1.4;
	// font-family: $mono-font-family;
	margin-bottom: 1em;
	font-style: italic;
	span {
		font-style: normal;
	}
}
.testimonial-name {
	margin-bottom: 0;
}
.testimonial-position {
	color: $color4;
}
</style>
