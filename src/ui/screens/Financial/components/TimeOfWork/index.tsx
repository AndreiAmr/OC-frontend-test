import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import AwardIcon from "../../../../assets/icons/award.svg";

interface TimeOfWorkingProps {
  isLoading: boolean;
}

export const TimeOfWorking = ({ isLoading }: TimeOfWorkingProps) => {
  if (isLoading) {
    return (
      <Skeleton minW="300px" w="100%" height="100px" borderRadius="12px" />
    );
  }

  return (
    <Flex
      flex={1}
      background="main"
      borderRadius="12px"
      justifyContent="space-between"
      alignItems="center"
      px="16px"
    >
      <Box>
        <Text color="white" fontSize=".95em" fontWeight={700}>
          Tempo de Mercado
        </Text>
        <Text color="white" fontSize="1.3em" fontWeight={700}>
          22 anos
        </Text>
      </Box>

      <Image src={AwardIcon} w="30px" h="30px" />
    </Flex>
  );
};
