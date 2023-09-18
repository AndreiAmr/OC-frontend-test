import { financialMock } from "../mocks/financial";

export const getFinancialMocks = (): Promise<typeof financialMock> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(financialMock);
    }, 4000);
  });
};
