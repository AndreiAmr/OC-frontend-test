import {
  Box,
  Text,
  Flex,
  Tag,
  Divider,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Button,
} from "@chakra-ui/react";

import { AreaInfo } from "../../../../components/AreaInfo";
import { FarmProps } from "../../../../../infra/types/farm";
import CheckIcon from "../../../../assets/icons/check.svg";
import TotalIcon from "../../../../assets/icons/total.png";
import ArrendadaIcon from "../../../../assets/icons/arrendada.png";

import Produtiva from "../../../../assets/icons/produtiva.png";
import { Map } from "../../../../components/Map";
import { ProdutividadeGraphic } from "../ProdutividadeGraphic";
import { NVDIGraphic } from "../NVDIGraphic";

interface FarmDetailsProps {
  currentFarm: FarmProps;
}

export const FarmDetails = ({ currentFarm }: FarmDetailsProps) => {
  return (
    <Flex
      background="white"
      mt="3px"
      boxShadow="0 0.9px 1.8px #00000025"
      borderRadius="15px"
      padding="60px 51px"
      gap="35px"
      justifyContent="space-between"
      // wrap="wrap"
    >
      <Box>
        <Text fontWeight={800} fontSize={"1.2em"} color="gray.800" mb="8px">
          {currentFarm.name}
        </Text>
        <Tag backgroundColor="gray.200" color="gray.800">
          {currentFarm.produtividadeStatus}
        </Tag>
        <Text fontSize=".8em" maxW="350px" mt="13px" color="gray.600">
          {currentFarm.address}
        </Text>
        <Text
          fontSize=".7em"
          fontWeight={800}
          color="gray.800"
          mt="10px"
          mb="32px"
        >
          {currentFarm.location.toUpperCase()}
        </Text>

        <Divider mb="14px" />

        <Text
          fontSize=".8em"
          maxW="350px"
          mt="13px"
          color="gray.100"
          fontWeight={800}
        >
          NIRF
        </Text>
        <Text
          fontSize=".8em"
          maxW="350px"
          // mt="13px"
          // color="gray.800"
          fontWeight={800}
        >
          -
        </Text>

        <Text
          fontSize=".8em"
          maxW="350px"
          mt="24px"
          color="gray.100"
          fontWeight={800}
        >
          INCRA
        </Text>

        <Flex alignItems="center" mb="60px">
          <Text
            fontSize="1.2em"
            maxW="350px"
            // mt="13px"
            color="gray.800"
            fontWeight={800}
          >
            {currentFarm.incra}
          </Text>
          <Image src={CheckIcon} ml="8px" mr="5px" />
          <Text color="green.600" fontWeight={800} fontSize=".9em">
            Quitado
          </Text>
        </Flex>

        <Text
          fontSize=".8em"
          maxW="350px"
          mt="62px"
          color="gray.100"
          fontWeight={800}
          mb="16px"
        >
          MATRÍCULAS
        </Text>
        <Table>
          <Thead>
            <Tr>
              <Th fontSize=".8em">Num.</Th>
              <Th fontSize=".8em">Área</Th>
              <Th fontSize=".8em">UF</Th>
              <Th fontSize=".8em">Município</Th>
            </Tr>
          </Thead>

          <Tbody>
            {currentFarm.matriculas.map((item) => (
              <Tr key={item.number}>
                <Th color="gray.800" fontWeight={500} fontSize=".85em">
                  {item.number}
                </Th>
                <Th color="gray.800" fontWeight={500} fontSize=".85em">
                  {item.area}
                </Th>
                <Th color="gray.800" fontWeight={500} fontSize=".85em">
                  {item.uf}
                </Th>
                <Th color="gray.800" fontWeight={500} fontSize=".85em">
                  {item.municipio}
                </Th>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Divider />

        <Text
          fontSize=".8em"
          maxW="350px"
          mt="60px"
          color="gray.100"
          fontWeight={800}
          mb="16px"
        >
          PROPIETÁRIOS
        </Text>
        <Table>
          <Thead>
            <Tr>
              <Th fontSize=".8em" color="gray.800">
                Nome
              </Th>
              <Th fontSize=".8em" color="gray.800">
                %
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentFarm.propietarios.map((item) => (
              <Tr key={item.name}>
                <Th color="gray.800" fontWeight={500} fontSize=".85em">
                  {item.name}
                </Th>
                <Th color="gray.800" fontWeight={500} fontSize=".85em">
                  {item.percentage}
                </Th>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Divider mt="47px" mb="26px" />
        <Text
          fontSize=".8em"
          maxW="350px"
          mt="60px"
          color="gray.100"
          fontWeight={800}
          mb="32px"
        >
          ÁREAS
        </Text>
        <Flex gap="15px">
          <AreaInfo
            icon={TotalIcon}
            title="TOTAL"
            value={`${currentFarm.totalArea.toFixed(1)} ha`}
          />
          <AreaInfo
            icon={ArrendadaIcon}
            title="PRÓPRIA"
            value={`${currentFarm.totalArea.toFixed(1)} ha`}
          />

          <AreaInfo
            icon={Produtiva}
            title="PRODUTIVA"
            value={`${currentFarm.areaProdutiva.toFixed(1)} ha`}
          />
        </Flex>
      </Box>
      <Flex flexDir="column" width="68%">
        <Flex gap="9px" justifyContent="flex-end">
          <Button
            h="21px"
            fontSize=".75em"
            fontWeight={800}
            border="1.45px solid green.600"
            color="green.600"
            background="white"
            borderRadius="3px"
          >
            GEO
          </Button>
          <Button
            h="21px"
            fontSize=".75em"
            fontWeight={800}
            border="1.45px solid gray.600"
            color="gray.600"
            background="white"
            borderRadius="3px"
          >
            CAFIR
          </Button>
          <Button
            h="21px"
            fontSize=".75em"
            fontWeight={800}
            border="1.45px solid gray.600"
            color="gray.600"
            background="white"
            borderRadius="3px"
          >
            INCRA
          </Button>
        </Flex>
        <Box height="37px" />
        <Map
          polygonGeometry={currentFarm.geometry}
          farmCenter={currentFarm.farmCenter}
        />
        <ProdutividadeGraphic data={currentFarm.produtividade} />
        <Box height={"31px"} />
        <NVDIGraphic data={currentFarm.NVDIGraphic} />
      </Flex>
    </Flex>
  );
};
