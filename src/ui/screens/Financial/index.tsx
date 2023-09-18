import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { PerformanceGraphic } from "./components/PerformanceGraphic";

import { HistoricTable } from "./components/HistoricTable.tsx";

import { Rating } from "./components/Rating/index.tsx";
import { UnityBusiness } from "./components/UnityBusiness/index.tsx";
import { Syngenta } from "./components/Syngenta/index.tsx";
import { Siagri } from "./components/Siagri/index.tsx";
import { TimeOfWorking } from "./components/TimeOfWork/index.tsx";
import { Serasa } from "./components/Serasa/index.tsx";
import { useFinancial } from "../../../infra/hooks/useFinancial.ts";
import { FeelingDescription } from "./components/FeelingDescription/index.tsx";
import FeelingImage from "../../assets/images/feeling-image.svg";

export const Financial = () => {
  const {
    items: { isLoading, financialInfos },
  } = useFinancial();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
      >
        <Flex
          flex={1}
          mt="120px"
          paddingX="70px"
          justifyContent="flex-end"
          alignItems="center"
          gap="8px"
          mb="22px"
          overflow="hidden"
        >
          <Text color="gray.600" fontSize=".9em">
            Tempo Real
          </Text>
          <Box h="8px" w="8px" borderRadius="4px" backgroundColor="red.500" />
        </Flex>

        <Flex gap="13px" paddingX="55px" flex={1} width="100%">
          <Rating
            isLoading={isLoading}
            finalRate={financialInfos?.finalRate}
            resultNumber={financialInfos?.finalPointe}
          />
          <Flex flex={1}>
            <PerformanceGraphic
              isLoading={isLoading}
              data={financialInfos?.performanceGraphic}
            />
          </Flex>
          <HistoricTable
            isLoading={isLoading}
            data={financialInfos?.historicTable}
          />
        </Flex>
        <Divider m="65px" width="94%" />
        <Flex marginX="65px" gap="24px">
          <Flex flex={0.4} flexDir="column">
            <Text color="gray.400" fontWeight={800} fontSize="1.2em">
              Institucional
            </Text>
            <Flex mt="34px" gap="16px" width="100%">
              <UnityBusiness isLoading={isLoading} />
              <Syngenta isLoading={isLoading} />
            </Flex>
            <Flex flex={1} mt="16px" gap="16px">
              <Siagri isLoading={isLoading} />
              <TimeOfWorking isLoading={isLoading} />
            </Flex>
            <Serasa isLoading={isLoading} />
          </Flex>
          <Box width="100%">
            <Text color="gray.400" fontWeight={800} fontSize="1.2em" mb="33px">
              Institucional
            </Text>
            <Flex flexDirection="column" gap="12px" flex={1}>
              <FeelingDescription
                name="João Júnior"
                date="12/09/2022 11:45:12"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis massa id purus vulputate, at sodales tellus mattis. In commodo leo magna, porttitor dictum orci laoreet et. Nulla aliquet, mi eget fermentum iaculis, velit dui imperdiet diam |"
                isLoading={isLoading}
              />
              <FeelingDescription
                imgSrc={FeelingImage}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis massa id purus vulputate, at sodales tellus mattis. In commodo leo magna, porttitor dictum orci laoreet et. Nulla aliquet, mi eget fermentum iaculis, velit dui imperdiet diam |"
                linearGradient="linear-gradient(to bottom right, #0881FC, #D12AA2)"
                isLoading={isLoading}
              />
            </Flex>
          </Box>
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
};
