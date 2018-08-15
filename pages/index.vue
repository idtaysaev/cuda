<template>
	<div class="home">
		<banner/>
		<services/>
		<team/>
		<skills/>
		<portfolio/>
		<about/>
		<contact/>
	</div>
</template>

<script>
import Banner from "~/components/sections/Banner.vue"
import Services from "~/components/sections/Services.vue"
import Team from "~/components/sections/Team.vue"
import Skills from "~/components/sections/Skills.vue"
import Portfolio from "~/components/sections/Portfolio.vue"
import About from "~/components/sections/About.vue"
import Contact from "~/components/sections/Contact.vue"

export default {
	components: {
		Banner,
		Services,
		Team,
		Skills,
		Portfolio,
		About,
		Contact
	}
}
</script>
