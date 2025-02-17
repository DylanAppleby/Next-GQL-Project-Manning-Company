import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/assets/Hero.jpeg')", // Adjust the path based on your project structure
        dateimage: "url('/assets/date.png')",
        locationimage: "url('/assets/location.png')",
        descriptionimage: "url('/assets/description.png')",
        call: "url('/assets/Call.png')",
        mail: "url('/assets/mail.png')",
        call_mail: "url('/assets/call_mail.png')",
        position: "url('/assets/position.png')",
        greencall: "url('/assets/greencall.png')",
        back1: "url('/assets/bg-1.png')",
        person1: "url('/assets/p-1.png')",
        person2: "url('/assets/p-2.png')",
        person3: "url('/assets/p-3.png')",
        person4: "url('/assets/p-4.png')",
      },
      fontFamily: {
        SaolDisplay: ["var(--font-SaolDisplay)"],
        SaolDisplayR: ["var(--font-SaolDisplayR)"],
        Akzidenregular: ["var(--font-Akzidenregular)"],
        Akzidenzpc: ["var(--font-Akzidenzpc)"],
        Akzidenzlc: ["var(--font-Akzidenzlc)"],
        SaolDisplayl: ["var(--font-SaolDisplayl)"],
        Apercu: ["var(--font-Apercu_Regular)"],
      },
      screens: {
        sm: "350px",
        md: "700px",
        lg: "1077px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
