import { Button as ChakraButton, Image } from "@chakra-ui/react";

interface ButtonProps {
  label: string;
  icon: string;
  onClick?(): void;
  isDisabled?: boolean;
  isActive?: boolean;
}

export const Button = ({
  label,
  icon,
  onClick,
  isActive,
  isDisabled,
}: ButtonProps) => {
  return (
    <ChakraButton
      alignItems="center"
      justifyItems="center"
      padding="10px 15px"
      backgroundColor={isActive ? "blue.50" : "white"}
      color="alpha700"
      boxShadow={"0px 4px 4px #00000015"}
      borderRadius={"12px"}
      fontSize=".85em"
      gap="6px"
      isDisabled={isDisabled}
      onClick={onClick}
    >
      <Image src={icon} height="12px" />

      {label}
    </ChakraButton>
  );
};
