import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    fontFamily:{
      'sans': ['Helvetica'],
      'serif': ['Helvetica'],
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1330px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bgGrey : "#22252a",
        formBg: "#242424",
        formInput: "#2e2c2d"
      }
      
    },
  },
  plugins: [],
}
export default config
