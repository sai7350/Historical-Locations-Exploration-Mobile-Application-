// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({ 
app:{
    head: {
        // ...
        script: [
          {
            src: 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js',
          }
        ],
      },
      // ...
    },
    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

})