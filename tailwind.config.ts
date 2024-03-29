import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        skeletonBG: 'rgb(209, 213, 219, 1)',
      },
      backgroundImage: {
        icons: "url('/assets/icons/eland-icons.png')",
        paymentIcons: "url('/assets/icons/payment-icons.png')",
        reviewStarBlank: "url('/assets/icons/review_score_lg_blank.png')",
        reviewStarOn: "url('/assets/icons/review_score_lg_on.png')",
      },
    },
  },
  plugins: [],
};
export default config;
