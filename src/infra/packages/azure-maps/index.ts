import { IAzureMapOptions, AuthenticationType } from "react-azure-maps";

export const mapOptions: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: "GfXo1C5PMM98-EaSld-IevK0epXO5sfX4XyLF1Met-s",
  },
  showTileBoundaries: false,
  showBuildingModels: false,
  showFeedbackLink: false,
  showLogo: false,
  style: "satellite",

  center: [-46.683251, -23.780669],
  zoom: 3,
};
