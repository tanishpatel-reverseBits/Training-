tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        primary100: "var(--primary-100)",
      },

      fontFamily: {
        regular: "var(--family-regular)",
        medium: "var(--family-medium)",
        semibold: "var(--family-semibold)",
        bold: "var(--family-bold)",
      },

      fontSize: {
        h1: [
          "var(--h1)",
          {
            lineHeight: "var(--h1-line-height)",
            letterSpacing: "var(--h1-letter-spacing)",
          },
        ],
        h2: [
          "var(--h2)",
          {
            lineHeight: "var(--h3-line-height)",
            letterSpacing: "var(--h2-letter-spacing)",
          },
        ],
        h3: [
          "var(--h3)",
          {
            lineHeight: "var(--h3-line-height)",
            letterSpacing: "var(--h3-letter-spacing)",
          },
        ],
        pheading: [
          "var(--pheading)",
          {
            lineHeight: "var(--pheading-line-height)",
            letterSpacing: "var(--pheading-letter-spacing)",
          },
        ],

        body1: [
          "var(--body1)",
          {
            lineHeight: "var(--body1-line-height)",
            letterSpacing: "var(--body1-letter-spacing)",
          },
        ],
        body2: [
          "var(--body2)",
          {
            lineHeight: "var(--body2-line-height)",
            letterSpacing: "var(--body2-letter-spacing)",
          },
        ],
        body3: [
          "var(--body3)",
          {
            lineHeight: "var(--body3-line-height)",
            letterSpacing: "var(--body3-letter-spacing)",
          },
        ],
        body4: [
          "var(--body4)",
          {
            lineHeight: "var(--body4-line-height)",
            letterSpacing: "var(--body4-letter-spacing)",
          },
        ],
        body5: [
          "var(--body5)",
          {
            lineHeight: "var(--body5-line-height)",
            letterSpacing: "var(--body5-letter-spacing)",
          },
        ],
        body6: [
          "var(--body6)",
          {
            lineHeight: "var(--body6-line-height)",
            letterSpacing: "var(--body6-letter-spacing)",
          },
        ],

        plabel: [
          "var(--plabel)",
          {
            lineHeight: "var(--plabel-line-height)",
            letterSpacing: "var(--plabel-letter-spacing)",
          },
        ],
        label1: [
          "var(--label1)",
          {
            lineHeight: "var(--label1-line-height)",
            letterSpacing: "var(--label1-letter-spacing)",
          },
        ],
        label2: [
          "var(--label2)",
          {
            lineHeight: "var(--label2-line-height)",
            letterSpacing: "var(--label2-letter-spacing)",
          },
        ],

        logo: [
          "var(--logo)",
          {
            lineHeight: "var(--logo-line-height)",
            letterSpacing: "var(--logo-letter-spacing)",
          },
        ],

        nav: [
          "var(--nav)",
          {
            lineHeight: "var(--nav-line-height)",
            letterSpacing: "var(--nav-letter-spacing)",
          },
        ],

        link2: [
          "var(--link2)",
          {
            lineHeight: "var(--link2-line-height)",
            letterSpacing: "var(--link2-letter-spacing)",
          },
        ],

        input: [
          "var(--input)",
          {
            lineHeight: "var(--input-line-height)",
            letterSpacing: "var(--input-letter-spacing)",
          },
        ],
      },
    },
  },
};
