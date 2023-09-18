import { motion, AnimatePresence } from "framer-motion";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import FazendaIcon from "../../assets/icons/fazenda.svg";

interface FazendaItem {
  title: string;
  location: string;
  totalArea: number;
  areaPropria: number;
  isActive?: boolean;
  onPress(): void;
}

export const FazendaItem = ({
  title,
  areaPropria,
  location,
  totalArea,
  isActive,
  onPress,
}: FazendaItem) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPress}
      >
        <Flex
          gap="13px"
          background={isActive ? "gray.50" : undefined}
          minW="250px"
          padding="13px 21px"
          borderRadius={9}
          cursor="pointer"
          _hover={{
            background: "gray.50",
          }}
          transition="all .5s"
        >
          <Image src={FazendaIcon} />
          <Box>
            <Text fontWeight="bold" color="gray.800" fontSize=".9em">
              {title}
            </Text>
            <Text fontWeight="bold" color="gray.600" fontSize=".9em" mb="3px">
              {location}
            </Text>
            <Flex gap="20px">
              <Flex alignItems="center" gap="5px">
                <Box
                  width="8px"
                  height="8px"
                  background="gray.500"
                  borderRadius="2px"
                />
                <Text fontWeight="bold" color="gray.600" fontSize=".8em">
                  {totalArea} ha.
                </Text>
              </Flex>
              <Flex alignItems="center" gap="5px">
                <Box
                  width="8px"
                  height="8px"
                  background="gray.500"
                  position="relative"
                  borderRadius="2px"
                  border="0.2px solid"
                  borderColor="gray.500"
                  overflow="hidden"
                >
                  <Box
                    width="3px"
                    height="8px"
                    background="white"
                    position="absolute"
                    right={0}
                  />
                </Box>
                <Text fontWeight="bold" color="gray.600" fontSize=".8em">
                  {areaPropria} ha.
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
};
