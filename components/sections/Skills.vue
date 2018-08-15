<template>
	<content-section
		id="skills"
		:title="title"
		:description="description"
		class="skills">
		<ul class="skills-list">
			<li
				v-for="skill in skills"
				:key="skill.title"
				class="skill">
				<p class="skill-value">
					<img
						:src="skill.img"
						:alt="skill.title"
						class="skill-img">
					{{ skill.value }}
					<span class="skill-percent">%</span>
				</p>
				<h3>
					{{ skill.title }}
				</h3>
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
			title: "We got skills!",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, magni error.",
			skills: [
				{
					img: require("~/assets/img/skills/web-design.png"),
					title: "Web Design",
					value: 90
				},
				{
					img: require("~/assets/img/skills/html-css.png"),
					title: "HTML / CSS",
					value: 75
				},
				{
					img: require("~/assets/img/skills/graphic.png"),
					title: "Graphic Design",
					value: 70
				},
				{
					img: require("~/assets/img/skills/ui-ux.png"),
					title: "UI / UX",
					value: 85
				}
			]
		}
	}
}
</script>

<style lang="scss">
.skills {
	background-color: white;
}
.skills-list {
	text-align: center;
	@include respond-to(x-small) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.skill {
			&:nth-last-child(2) {
				margin-bottom: 0;
			}
			width: 50%;
		}
	}
	@include respond-to(medium) {
		.skill {
			margin-bottom: 0;
			width: 25%;
		}
	}
}
.skill {
	padding: 0 1em;
	margin-bottom: 3em;
	&:last-child {
		margin-bottom: 0;
	}

	&:nth-child(2) {
		.skill-img {
			width: 127%;
		}
	}
	&:nth-child(3) {
		.skill-img {
			width: 120%;
		}
	}
}
.skill-value {
	position: relative;
	width: 160px;
	height: 160px;
	margin: 0 auto 0.4em;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: $font-size-xxx-large;
	border: 0.3em solid $color-light-grey;
	border-radius: 50%;
}
.skill-img {
	position: absolute;
	top: -17%;
	right: -11%;
	width: 123%;
	height: 130%;
	max-width: none;
}
</style>
