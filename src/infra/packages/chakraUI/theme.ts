import { extendTheme } from "@chakra-ui/react";

export const chakraTheme = extendTheme({
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "Helvetica",
        outline: "none !important",
      },

      "html, body": {
        background: "#F5F5F5",
        width: "100vw",
        overflowX: "hidden",
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
