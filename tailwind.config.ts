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
        lgl:"1200px",
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
        bgDarkblue : "#041C32",
        bgGrey : "#22252a",
        formBg: "#041C32",
        formInput: "#064663"
      }
      
    },
  },
  plugins: [],
}
export default config
