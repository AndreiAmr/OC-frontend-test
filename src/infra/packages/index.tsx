import { PropsWithChildren } from "react";
import { AzureMapsProvider } from "react-azure-maps";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./chakraUI/theme";

export const PackagesProviders = ({ children }: PropsWithChildren) => {
  return (
    <AzureMapsProvider>
      <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
    </AzureMapsProvider>
  );
};
