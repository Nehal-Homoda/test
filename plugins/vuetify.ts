// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    defaults: {
      VContainer: {
        maxWidth: '1300px',
        class: 'px-5 px-md-10 px-xl-16'
      },
    }
  })
  app.vueApp.use(vuetify)
})
