import { farmsMocked } from "../mocks/farms";
import { FarmProps } from "../types/farm";

export const getFazendas = async () => {
  const farms = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(farmsMocked);
    }, 4000);
  });

  return farms as FarmProps[];
};
