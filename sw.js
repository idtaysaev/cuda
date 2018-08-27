importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "cuda",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.a83f128c40e962d4b897.js",
    "revision": "1597eadcb309677e5580647ee122dd05"
  },
  {
    "url": "/_nuxt/layouts/default.aee3098f7f100f5ccd8b.js",
    "revision": "36359efaeccf1da8d9f916908a3a31e2"
  },
  {
    "url": "/_nuxt/manifest.7f6dfdc7b1d70189ec51.js",
    "revision": "5115836662a24f092777e5b5bd4febc7"
  },
  {
    "url": "/_nuxt/pages/index.27e8fb9caec23ebe365d.js",
    "revision": "69a5b561b89f1dd36b9013550359da42"
  },
  {
    "url": "/_nuxt/vendor.b8f8e354eed775a9e186.js",
    "revision": "10f889695e687eec941a672466235bf5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

