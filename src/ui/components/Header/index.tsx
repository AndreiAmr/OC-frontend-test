import { Flex, Box } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      width="calc(100% - 64px)"
      height="183px"
      borderRadius="15px"
      backgroundColor="#1A8C6F"
      mt="28px"
      mx="32px"
      px="26px"
    >
      <Flex
        height="183px"
        backgroundColor="#fff"
        width="100%"
        mt="61px"
        borderRadius="15px"
      >
        <Flex mt="31px">
          <Box h="81px" w="81px" borderRadius="8px" backgroundColor="gray.100">
            {" "}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
