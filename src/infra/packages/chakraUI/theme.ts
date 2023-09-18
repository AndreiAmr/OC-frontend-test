import { extendTheme } from "@chakra-ui/react";

export const chakraTheme = extendTheme({
  colors: {
    main: "#1A8C6F",
    green: {
      400: "#4FD1C5",
      600: "#48BB78",
    },
    blue: {
      50: "#EDF2F7",
      100: "#E2E8F0",
    },
    gray: {
      50: "#F7FAFC",
      100: "#A0AEC0",
      600: "#718096",
      800: "#4A5568",
      850: "#171923",
      900: "#2D3748",
    },
  },
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "Helvetica",
        outline: "none !important",
      },

      ".recharts-layer, .recharts-pie-sector": {
        border: "3px solid black",
      },

      "::-webkit-scrollbar": {
        width: "7px",
      },

      "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },

      "::-webkit-scrollbar-thumb": {
        background: "#1A8C6F",
        borderRadius: "10px",
      },

      "html, body": {
        background: "#F5F5F5",
        height: "100%",
        width: "100vw",
        overflowX: "hidden",
      },

      ".tick-value, .tick-line": {
        display: "none",
      },

      ".rotate": {
        animation: "rotate 2s inifite",
      },
      "@keyframes rotate": {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
  },
});
