module.exports = {
	head: {
		title: "cuda",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "Cuda | building awesome websites and mobile apps" },
			{ hid: "author", name: "author", content: "Idar Taysaev" },
			{ hid: "theme-color", name: "theme-color", content: "#3B8070" }
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Titillium+Web:400,400i,500,700" },
		]
	},
	loading: { color: "#3B8070", failedColor: "#cc2936" },
	modules: [
		"@nuxtjs/pwa",
		"nuxt-sass-resources-loader"
	],
	sassResources: [
		"~assets/scss/utils/_mixins.scss",
		"~assets/scss/utils/_variables.scss"
	],
	css: ["@/assets/scss/main.scss"],
	plugins: ["~/plugins/global.js"],
	build: {
		/*
    ** Run ESLint on save
    */
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/
				})
			}
		}
	},
	router: {
		base: "/cuda/"
	}
}

