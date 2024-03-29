// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode'],
  css: ['~/assets/css/global.css'],
  typescript: {
    strict: true,
    typeCheck: true
  },
  colorMode: {
    classSuffix: ''
  },
  components: [
    {
      path: '~/components/app',
      prefix: 'App'
    }
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  runtimeConfig: {
    newt: {
      spaceUid: '',
      cdnApiToken: ''
    }
  },
  devtools: { enabled: true }
})
