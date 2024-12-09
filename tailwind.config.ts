import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "750px",
        md: "850px",
        lg: "1024px",
        xl: "1180px",
        "2xl": "1536px",
      },
    },
    extend: {
      backgroundImage: {
        "about-gradient":
          "linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea)",
      },
      backgroundSize: {
        "200%": "200%",
      },
      minHeight: {
        custom: "calc(100dvh - 320px)",
      },

      keyframes: {
        hedar: {
          from: { top: "-60px", opacity: "0" },
          to: { top: "0", opacity: "1" },
        },
        grained: {
          "0%": {
            filter: " brightness(1)",
            backgroundPosition: "0 0",
          },
          "10%": {
            filter: " brightness(1.1)",
            backgroundPosition: "50% 50%",
          },
          "20%": {
            filter: "brightness(1.2)",
            backgroundPosition: "100% 100%",
          },
          "30%": {
            filter: " brightness(1.3)",
            backgroundPosition: "150% 150%",
          },
          "40%": {
            filter: " brightness(1)",
            backgroundPosition: "200% 200%",
          },
          "50%": {
            filter: " brightness(1.1)",
            backgroundPosition: "250% 250%",
          },
          "60%": {
            filter: " brightness(1.2)",
            backgroundPosition: "300% 300%",
          },
          "70%": {
            filter: " brightness(1)",
            backgroundPosition: "350% 350%",
          },
          "80%": {
            filter: " brightness(1.1)",
            backgroundPosition: "400% 400%",
          },
          "90%": {
            filter: " brightness(1)",
            backgroundPosition: "450% 450%",
          },
          "100%": {
            filter: "brightness(1.3)",
            backgroundPosition: "500% 500%",
          },
        },
        textGradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        grained: "grained 5s steps(20) infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-fill-color": {
          "-webkit-text-fill-color": "transparent", // جعل النص شفافًا
          "-webkit-text-stroke-width": "1.4px", // إضافة حدود للنص بعرض 1.4px
          "-webkit-text-stroke-color": "#fff", // تحديد لون الحدود إلى الأبيض
          "background-clip": "text", // تطبيق التدرج على النص

          "background-image":
            "linear-gradient(90deg, #0ea5ea, #0bd1d1, #0ea5ea)", // التدرج اللوني
          "background-size": "200% 100%", // التدرج اللوني
        },

        ".text-gradient": {
          background: `linear-gradient(90deg, #0ea5ea, #0bd1d1  51%, #0ea5ea)`,
          backgroundSize: "200%",
          backgroundPosition: "0 0",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textFillColor: "transparent",
        },
      });
    }),
  ],
} satisfies Config;
