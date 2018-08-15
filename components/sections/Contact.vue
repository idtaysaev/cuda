<template>
	<content-section
		id="contact"
		:title="title"
		:description="description"
		class="contact">
		<div class="contact-container">
			<form
				class="contact-form"
				action="#">
				<div class="form-block-double">
					<div class="form-block">
						<input
							type="text"
							placeholder="Your Name"
							required>
					</div>
					<div class="form-block">
						<input
							type="email"
							placeholder="Your Email"
							required>
					</div>
				</div>
				<div class="form-block">
					<textarea
						name="message"
						placeholder="Your Message"
						required/>
				</div>
				<div class="form-block">
					<button type="submit">Send Message</button>
				</div>
			</form>
		</div>
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
			title: "Get in touch",
			description: "1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America"
		}
	}
}
</script>

<style lang="scss">
.contact {
	background-color: $color6;
	color: white;

	button {
		background-color: $color2;
	}
}
.contact-container {
	width: 860px;
	max-width: 100%;
	margin: 0 auto;
}
</style>
