import { Text, Flex } from "@chakra-ui/react";
import { RefreshContainer } from "../../../../components/RefreshContainer";
import { AreaInfo } from "../../../../components/AreaInfo";
import TotalIcon from "../../../../assets/icons/total.png";
import ArrendadaIcon from "../../../../assets/icons/arrendada.png";
import Propria from "../../../../assets/icons/propria.png";
import Produtiva from "../../../../assets/icons/produtiva.png";

export const TotalArea = () => {
  return (
    <RefreshContainer>
      <Flex>
        <Text fontWeight={700} color="#2D3748">
          Áreas Totais
        </Text>

        <Flex gap="15px" ml="50px" wrap="wrap">
          <AreaInfo icon={TotalIcon} title="TOTAL" value="437.1 ha." />
          <AreaInfo icon={ArrendadaIcon} title="ARRENDADA" value="437.1 ha." />
          <AreaInfo icon={Propria} title="PRÓPRIA" value="437.1 ha." />
          <AreaInfo icon={Produtiva} title="PRODUTIVA" value="437.1 ha." />
        </Flex>
      </Flex>
    </RefreshContainer>
  );
};
