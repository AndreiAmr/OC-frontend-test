import { useEffect, useState } from "react";
import { financialMock } from "../mocks/financial";
import { getFinancialMocks } from "../services/get-financial";

export const useFinancial = () => {
  const [financialInfos, setFinancialInfos] = useState<typeof financialMock>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getFinancial = async () => {
    setIsLoading(true);
    const data = await getFinancialMocks();
    setFinancialInfos(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getFinancial();
  }, []);

  return {
    items: {
      financialInfos,
      isLoading,
    },
    handlers: {},
  };
};
