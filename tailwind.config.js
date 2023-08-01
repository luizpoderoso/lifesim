/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: { center: true },

      animation: {
        // fade in
        fadeInModal: "fadeInModal 0.7s ease-in-out",
        fadeInModalBackground: "fadeInBackground 0.5s ease-in-out",
        fadeInModalText: "fadeInText 1.2s ease-in-out",

        // fade out
        fadeOutModal: "fadeOutModal 1s ease-in-out",
        fadeOutModalBackground: "fadeOutBackground 1.5s ease-in-out",
        fadeOutModalText: "fadeOutText 0.5s ease-in-out",
      },

      keyframes: theme => ({
        // fade in
        fadeInModal: {
          '0%': { width: '0px', height: '0px' },
          '100%': { width: '750px', height: '600px' }
        },

        fadeInBackground: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.black') }
        },

        fadeInText: {
          '0%': { color: theme('colors.transparent') },
          '50%': { color: theme('colors.transparent') },
          '100%': { color: theme('colors.zinc.500') }
        },

        //fade out
        fadeOutModal: {
          '0%': { width: '750px', height: '600px' },
          '100%': { width: '0px', height: '0px' }
        },

        fadeOutBackground: {
          '0%': { backgroundColor: theme('colors.black') },
          '100%': { backgroundColor: theme('colors.transparent') }
        },

        fadeOutText: {
          '0%': { color: theme('colors.zinc.500') },
          '100%': { color: theme('colors.transparent') }
        },
      })

    },
  },
  plugins: [],
}

