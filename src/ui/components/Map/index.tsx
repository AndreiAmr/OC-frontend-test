import { Box, Flex, Button } from "@chakra-ui/react";
import { useMap } from "../../../infra/hooks/useMap";
import { UseMapProps } from "../../../infra/types/map";

export const Map = (props: UseMapProps) => {
  const {
    handlers: { handleSetPropertyMode, handleSetWeatherMode },
  } = useMap(props);

  return (
    <Box height="342px" width="100%" borderRadius="13px" overflow="hidden">
      <Box id="map" height={"100%"} position="relative">
        <Flex
          position="absolute"
          zIndex={999}
          width="100%"
          justifyContent="center"
          gap="6px"
          mt="13px"
        >
          <Button
            width="107px"
            height="26px"
            borderRadius="5px"
            backgroundColor="green.600"
            color="white"
            onClick={handleSetPropertyMode}
          >
            Propriedade
          </Button>
          <Button
            width="107px"
            height="26px"
            background="blue.100"
            borderRadius="5px"
            color="alpha600"
            onClick={handleSetWeatherMode}
          >
            Clima
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
