import { Box, Flex, Skeleton, Tag, Text } from "@chakra-ui/react";

interface UnityBusinessProps {
  isLoading: boolean;
}

export const UnityBusiness = ({ isLoading }: UnityBusinessProps) => {
  if (isLoading) {
    return <Skeleton minH="215px" h="78%" minW="300px" borderRadius="12px" />;
  }

  return (
    <Box
      background="white"
      borderRadius="12px"
      boxShadow="3.5px 0px 5.5px #00000006"
      width="300px"
    >
      <Flex
        paddingLeft="16px"
        paddingTop="16px"
        paddingRight="8px"
        alignItems="flx-start"
        height="70%"
        minH="170px"
        width="100%"
      >
        <Flex gap="46px">
          <Text color="gray.400" fontWeight={800} fontSize=".9em">
            Unidades de Negócio
          </Text>
          <Tag
            backgroundColor="green.100"
            color="green.400"
            size="sm"
            borderRadius="100px"
            height="25px"
            fontWeight={700}
            mr="10px"
          >
            BAIXO
          </Tag>
        </Flex>
      </Flex>

      <Text
        color="gray.850"
        fontWeight={800}
        fontSize="1.5em"
        paddingLeft="20px"
        mb="10px"
      >
        9 Unidades
      </Text>
    </Box>
  );
};
