import { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./chakraUI/theme";

export const PackagesProviders = ({ children }: PropsWithChildren) => {
  return <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>;
};
