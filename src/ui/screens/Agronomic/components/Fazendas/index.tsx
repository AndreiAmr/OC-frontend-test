import { motion, AnimatePresence } from "framer-motion";

import { Box, Text, Flex, Skeleton } from "@chakra-ui/react";
import { RefreshContainer } from "../../../../components/RefreshContainer";
import { FazendaItem } from "../../../../components/FazendaItem";
import { useFarms } from "../../../../../infra/hooks/useFarms";
import { useCallback } from "react";

// interface FazendasProps {

// }

export const Fazendas = () => {
  const { items, handlers } = useFarms();
  const { farms, isLoading } = items;
  const { refresh } = handlers;

  const renderItems = useCallback(() => {
    if (isLoading) {
      const LOADING_SKELETOS_NUMBER = ["", "", "", "", "", ""];
      return LOADING_SKELETOS_NUMBER.map((_, indice) => {
        return (
          <AnimatePresence key={indice}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <Skeleton minW="250px" height="87px" borderRadius="15px" />
            </motion.div>
          </AnimatePresence>
        );
      });
    }

    return farms?.map((item, indice) => (
      <FazendaItem
        key={item.name + indice}
        areaPropria={item.areaPropria}
        location={item.location}
        title={item.name}
        totalArea={item.totalArea}
        isActive={indice === 0}
      />
    ));
  }, [isLoading, farms]);

  return (
    <RefreshContainer
      isLoading={isLoading}
      handleRefresh={refresh}
      lastRefresh={items.lastRefresh}
    >
      <Box>
        <Text fontWeight="bold" color="#2D3748" mb="30px">
          Fazendas
        </Text>
        <Flex wrap="wrap" gap="27px">
          {renderItems()}
        </Flex>
      </Box>
    </RefreshContainer>
  );
};
