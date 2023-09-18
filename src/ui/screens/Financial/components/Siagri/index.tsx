import { Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import SiagriLogo from "../../../../assets/images/Siagri-Logo.png";

interface SiagriProps {
  isLoading: boolean;
}

export const Siagri = ({ isLoading }: SiagriProps) => {
  if (isLoading) {
    return <Skeleton minW="300px" height="100px" borderRadius="12px" />;
  }

  return (
    <Flex
      background="white"
      borderRadius="12px"
      boxShadow="3.5px 0px 5.5px #00000006"
      width="300px"
      py="19px"
    >
      <Flex
        paddingLeft="16px"
        paddingTop="16px"
        paddingRight="8px"
        alignItems="flx-start"
        height="78%"
        width="100%"
      >
        <Flex flex={1} justifyContent="space-between" alignItems="center">
          <Text color="alpha400" fontWeight={800} fontSize=".9em">
            ERP
          </Text>
          <Image src={SiagriLogo} />
        </Flex>
      </Flex>
    </Flex>
  );
};
