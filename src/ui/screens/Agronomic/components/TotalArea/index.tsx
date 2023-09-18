import { Text, Flex, Skeleton } from "@chakra-ui/react";
import { RefreshContainer } from "../../../../components/RefreshContainer";
import { AreaInfo } from "../../../../components/AreaInfo";

import { useAreas } from "../../../../../infra/hooks/useAreas";

export const TotalArea = () => {
  const { items, handlers } = useAreas();

  const renderLoading = () => {
    return (
      <Flex gap="15px" ml="50px" wrap="wrap">
        <Skeleton w="112px" h="60px" borderRadius="7px"></Skeleton>
        <Skeleton w="112px" h="60px" borderRadius="7px"></Skeleton>
        <Skeleton w="112px" h="60px" borderRadius="7px"></Skeleton>
        <Skeleton w="112px" h="60px" borderRadius="7px"></Skeleton>
      </Flex>
    );
  };

  return (
    <RefreshContainer
      handleRefresh={handlers.handleRefresh}
      isLoading={items.isLoading}
      lastRefresh={items.lastRefresh}
    >
      <Flex>
        <Text fontWeight={700} color="gray.900">
          Áreas Totais
        </Text>

        {items.isLoading ? (
          renderLoading()
        ) : (
          <Flex gap="15px" ml="50px" wrap="wrap">
            {items.areas?.map((item) => {
              return (
                <AreaInfo
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  value={`${item.value} ha`}
                />
              );
            })}
          </Flex>
        )}
      </Flex>
    </RefreshContainer>
  );
};
