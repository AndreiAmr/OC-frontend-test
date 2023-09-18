import { areasMocked } from "../mocks/areas";

export const getAreas = async (): Promise<typeof areasMocked> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(areasMocked);
    }, 4000);
  });
};
