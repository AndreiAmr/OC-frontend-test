import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { AzureMap } from "react-azure-maps";
import { mapOptions } from "../../../infra/packages/azure-maps";
import { AzureMapStyles } from "../../../infra/utils/azure-maps";

// (async () => {
//   const test = await fetch(
//     "https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&query=47.60357,-122.32945&subscription-key=GfXo1C5PMM98-EaSld-IevK0epXO5sfX4XyLF1Met-s"
//   );

//   console.log(test);
// })();

export const Map = () => {
  const [currentMapType] = useState<AzureMapStyles>(AzureMapStyles.Satellite);

  return (
    <Box height="342px" width="100%" borderRadius="13px" overflow="hidden">
      <AzureMap
        options={mapOptions}
        styleOptions={{
          showLogo: false,
          language: "pt",
          showBuildingModels: false,
          showFeedbackLink: false,
          showTileBoundaries: false,
          preserveDrawingBuffer: true,
          autoResize: false,
          borderRadius: "13px",
          style: currentMapType,
        }}
      ></AzureMap>
    </Box>
  );
};
