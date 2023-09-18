import { useEffect, useState } from "react";
import { areasMocked } from "../mocks/areas";
import { getAreas } from "../services/get-areas";

export const useAreas = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [areas, setAreas] = useState<typeof areasMocked>();
  const [lastRefresh, setLastRefresh] = useState<string>(
    new Date().toUTCString()
  );

  const handleGetAreas = async () => {
    setIsLoading(true);
    const areas = await getAreas();
    setLastRefresh(new Date().toUTCString());
    setAreas(areas);
    setIsLoading(false);
  };
  const handleRefresh = async () => {
    await handleGetAreas();
  };

  useEffect(() => {
    handleGetAreas();
  }, []);

  return {
    items: {
      isLoading,
      areas,
      lastRefresh,
    },

    handlers: {
      handleRefresh,
    },
  };
};
