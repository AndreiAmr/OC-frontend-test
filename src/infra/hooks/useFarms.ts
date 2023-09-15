import { useState, useEffect } from "react";
import { FarmProps } from "../types/farm";
import { getFazendas } from "../services/get-fazendas";

export const useFarms = () => {
  const [farms, setFarms] = useState<FarmProps[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastRefresh, setLastRefresh] = useState<string>(
    new Date().toUTCString()
  );

  const handleGetFarms = async () => {
    setIsLoading(true);
    const farms = await getFazendas();
    setLastRefresh(new Date().toUTCString());
    setFarms(farms);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetFarms();
  }, []);

  return {
    items: {
      farms,
      isLoading,
      lastRefresh,
    },
    handlers: {
      refresh: handleGetFarms,
    },
  };
};
