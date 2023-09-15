import { Button as ChakraButton, Image } from "@chakra-ui/react";

interface ButtonProps {
  label: string;
  icon: string;
}

export const Button = ({ label, icon }: ButtonProps) => {
  return (
    <ChakraButton
      alignItems="center"
      justifyItems="center"
      padding="10px 15px"
      colorScheme="white"
      color="gray.700"
      boxShadow={"0px 4px 4px #00000015"}
      borderRadius={"12px"}
      fontSize=".85em"
      gap="6px"
    >
      <Image src={icon} height="12px" />

      {label}
    </ChakraButton>
  );
};
