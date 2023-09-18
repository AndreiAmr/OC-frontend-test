import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";

interface FeelingDescriptionProps {
  description: string;
  isLoading: boolean;
  imgSrc?: string;
  name?: string;
  date?: string;
  linearGradient?: string;
}

export const FeelingDescription = ({
  description,
  isLoading,
  imgSrc,
  date,
  name,
  linearGradient,
}: FeelingDescriptionProps) => {
  if (isLoading) {
    return <Skeleton width="100%" h="100px" minW="100%" borderRadius="12px" />;
  }

  return (
    <Flex
      background="white"
      borderRadius="12px"
      p="16px"
      gap="18px"
      alignItems="flex-start"
    >
      {imgSrc ? (
        <Image
          minW="48px"
          h="48px"
          borderRadius="7px"
          src={imgSrc}
          border={"none"}
          outline="none"
          overflow="hidden"
          mt="10px"
        />
      ) : (
        <Box
          minW="48px"
          h="48px"
          borderRadius="7px"
          background="blue.100"
          border={"none"}
          outline="none"
          overflow="hidden"
          mt="5px"
        />
      )}
      <Box width="100%">
        <Flex flex={1} justifyContent="space-between" mb="8px">
          {name && (
            <Text fontSize=".9em" color="gray.600" fontWeight={800}>
              {name}
            </Text>
          )}
          {date && (
            <Text fontSize=".9em" color="gray.600" fontWeight={400}>
              {date}
            </Text>
          )}
        </Flex>
        <Text
          fontSize="1.1em"
          color="gray.600"
          fontWeight={400}
          background={linearGradient}
          backgroundClip={linearGradient ? "text" : "unset"}
        >
          {description}
        </Text>
      </Box>
    </Flex>
  );
};
