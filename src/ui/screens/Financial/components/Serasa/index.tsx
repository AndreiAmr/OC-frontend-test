import { Flex, Skeleton, Tag, Text } from "@chakra-ui/react";
import { SerasaScore } from "../../../../components/SerasaScore";

interface SerasaProps {
  isLoading: boolean;
}

export const Serasa = ({ isLoading }: SerasaProps) => {
  if (isLoading) {
    return (
      <Skeleton
        minW="300px"
        w="100%"
        height="100px"
        borderRadius="12px"
        mt="16px"
        mb="68px"
      />
    );
  }

  return (
    <Flex
      height="92px"
      borderRadius="12px"
      backgroundColor="white"
      alignItems="center"
      px="16px"
      mt="16px"
      justifyContent="space-between"
      mb="68px"
    >
      <Flex alignItems="center" gap="16px">
        <Text fontSize="1em" fontWeight={800} color="gray.400">
          Score Serasa
        </Text>
        <Tag background="green.100" color="green.400" borderRadius="100px">
          BOM
        </Tag>
      </Flex>
      <SerasaScore />
    </Flex>
  );
};
