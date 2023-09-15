import { extendTheme } from "@chakra-ui/react";

export const chakraTheme = extendTheme({
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },

      "html, body": {
        background: "#F5F5F5",
      },
    },
  },
});
