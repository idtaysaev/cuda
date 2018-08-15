<template>
	<footer class="footer">
		<container>
			<div class="social">
				<ul class="social-list">
					<li
						v-for="link in links"
						:key="link.label">
						<a :href="link.link">{{ link.label }}</a>
					</li>
				</ul>
			</div>
		</container>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					label: "Facebook",
					link: "https://facebook.com"
				},
				{
					label: "Twitter",
					link: "https://twitter.com"
				},
				{
					label: "Google+",
					link: "https://google.com"
				},
				{
					label: "LinkedIn",
					link: "https://linkedin.com"
				},
				{
					label: "Behance",
					link: "https://behance.com"
				},
				{
					label: "Dribbble",
					link: "https://dribbble.com"
				},
				{
					label: "GitHub",
					link: "https://github.com"
				},
			]
		}
	}
}
</script>

<style lang="scss">
.footer {
	padding: 1.6em 0;
	background-color: $color-background-footer;
	color: white;
}
.social-list {
	text-align: center;
	li {
		margin-bottom: 0.4em;
		&:last-child {
			margin-bottom: 0;
		}
	}
	@include respond-to(x-small) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		li {
			margin: 0 0.4em;
		}
	}
	@include respond-to(medium) {
		li {
			margin: 0 1.6em;
		}
	}
	font-weight: bold;
}
</style>
