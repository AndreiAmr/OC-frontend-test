import { Divider, Flex, Skeleton, Tag, Text } from "@chakra-ui/react";

interface RatingProps {
  isLoading: boolean;
  finalRate?: string;
  resultNumber?: number;
}

export const Rating = ({ isLoading, finalRate, resultNumber }: RatingProps) => {
  if (isLoading) {
    return (
      <Skeleton width="220px" height="300px" borderRadius="12px"></Skeleton>
    );
  }

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      background="white"
      borderRadius="12px"
      padding="20px 0"
      boxShadow="0px 1px 3px #00000015"
    >
      <Text
        fontWeight={700}
        color="gray.900"
        fontSize="1.1em"
        width="105px"
        marginX="60px"
      >
        Rating Final
      </Text>
      <Text fontWeight={700} color="green.600" fontSize="64px">
        {finalRate}
      </Text>
      <Text fontWeight={600} color="gray.900" fontSize="1em" marginTop="4px">
        {resultNumber}
      </Text>
      <Divider my="16px" />
      <Text color="gray.400" fontSize="14px" fontWeight={400} mb="8px">
        OBJETIVO
      </Text>
      <Tag
        size="lg"
        padding="16px"
        fontWeight={700}
        color="gray.600"
        background="blue.50"
      >
        98,9
      </Tag>
    </Flex>
  );
};
