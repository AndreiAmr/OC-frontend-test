import { Flex, Image, Text } from "@chakra-ui/react";

interface AreaInfoProps {
  title: string;
  value: string;
  icon: string;
}

export const AreaInfo = ({ icon, title, value }: AreaInfoProps) => {
  return (
    <Flex
      flexDir="column"
      background="#E2E8F0"
      borderRadius="5px"
      position="relative"
      w="112px"
      paddingBottom={"12px"}
      justifyContent="center"
      alignItems="center"
    >
      <Image src={icon} position="absolute" top="-25%" />
      <Text mt="15px" fontSize=".9em" fontWeight={700} color="#4A5568">
        {value}
      </Text>
      <Text fontSize=".65em" fontWeight={700} color="#718096">
        {title}
      </Text>
    </Flex>
  );
};
