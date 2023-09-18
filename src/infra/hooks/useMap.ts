import { useState, useEffect } from "react";

import { AzureMapStyles } from "../utils/azure-maps";

import {
  AuthenticationType,
  Map as AzureMap,
  layer,
  data,
  source,
} from "azure-maps-control";
import { UseMapProps } from "../types/map";

let tileLayer: any;

let datasource: source.DataSource | undefined;

const weatherTileUrl =
  "https://{azMapsDomain}/map/tile?api-version=2.0&tilesetId={layerName}&zoom={z}&x={x}&y={y}";

export const useMap = ({ polygonGeometry, farmCenter }: UseMapProps) => {
  const [map, setMap] = useState<AzureMap>();

  const getMap = () => {
    setMap(
      new AzureMap("map", {
        view: "Auto",
        authOptions: {
          authType: AuthenticationType.subscriptionKey,
          subscriptionKey: "GfXo1C5PMM98-EaSld-IevK0epXO5sfX4XyLF1Met-s",
        },
        style: AzureMapStyles.Satellite,
        language: "pt",
        zoom: 14,
        center: farmCenter,
      })
    );
  };

  async function updateTileLayer() {
    const layerName = "microsoft.weather.radar.main";

    const tileUrl = weatherTileUrl.replace("{layerName}", layerName);

    if (!tileLayer) {
      //Create a tile layer and add it to the map below the label layer.
      tileLayer = await new layer.TileLayer({
        tileUrl: tileUrl,
        opacity: 1,
        tileSize: 256,
      });

      await map?.layers.add(tileLayer, "my-layers");
    } else {
      tileLayer.setOptions({
        tileUrl: tileUrl,
      });
    }
  }

  const handleSetWeatherMode = async () => {
    map?.setCamera({
      zoom: 0,
    });
    await updateTileLayer();

    map?.setStyle({
      style: AzureMapStyles.Grayscale_dark,
    });
  };

  const handleSetPropertyMode = async () => {
    map?.setCamera({
      center: farmCenter,
      zoom: 13,
    });
  };

  const addPolygonToMap = () => {
    if (datasource) {
      datasource.clear();
    }

    datasource = new source.DataSource();
    map?.sources.add(datasource);

    datasource.add(new data.Polygon(polygonGeometry));
    const shape = new layer.PolygonLayer(datasource, undefined, {
      fillColor: "rgba(0, 0, 0, 0.7)",
      fillOpacity: 1,
    });

    map?.layers.add(shape);
  };

  useEffect(() => {
    getMap();
  }, []);

  useEffect(() => {
    if (map) {
      map.events.add("ready", async () => {
        const { zoom } = map.getCamera();

        if (zoom && zoom < 7) await updateTileLayer();

        map.setCamera({
          center: farmCenter,
          zoom: 13,
        });
      });

      map.events.add("load", async () => {
        addPolygonToMap();
      });

      map.events.add("zoomend", async () => {
        const { zoom } = map.getCamera();

        if (zoom && zoom > 7) {
          if (map.getStyle().style === AzureMapStyles.Satellite) return;

          map.setStyle({
            style: AzureMapStyles.Satellite,
          });

          await map.layers.clear();
          tileLayer = undefined;
          addPolygonToMap();
        } else {
          await updateTileLayer();

          map.setStyle({
            style: AzureMapStyles.Grayscale_dark,
          });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, polygonGeometry]);

  return {
    handlers: {
      handleSetPropertyMode,
      handleSetWeatherMode,
    },
  };
};
