import { Divider, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import SyngentaLogo from "../../../../assets/images/Syngenta-Logo.svg";

interface SyngentaProps {
  isLoading: boolean;
}

export const Syngenta = ({ isLoading }: SyngentaProps) => {
  if (isLoading) {
    return (
      <Skeleton height="100%" width="100%" minW="276px" borderRadius="12px" />
    );
  }

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      background="white"
      minW="276px"
      borderRadius="12px"
      flex={1}
      boxShadow="3.5px 0px 5.5px #00000006"
    >
      <Image src={SyngentaLogo} my="22px" />

      <Text fontSize="1em" color="gray.850" fontWeight={800}>
        Syngenta
      </Text>
      <Text
        color="gray.600"
        fontSize=".9em"
        fontWeight={700}
        mt="8px"
        mb="16px"
      >
        Principal fornecedor
      </Text>

      <Divider mb="16px" width="80%" />

      <Text color="gray.900" fontSize="1.1em" fontWeight={800} mb="22px">
        50%
      </Text>
    </Flex>
  );
};
