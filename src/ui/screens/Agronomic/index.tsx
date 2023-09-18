import { motion, AnimatePresence } from "framer-motion";

import { Box } from "@chakra-ui/react";
import { TotalArea } from "./components/TotalArea";
import { Fazendas } from "./components/Fazendas";
import { FarmDetails } from "./components/FarmDetail";
import { useState } from "react";
import { FarmProps } from "../../../infra/types/farm";

export const Agronomic = () => {
  const [currentFarm, setCurrentFarm] = useState<FarmProps>();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
      >
        <Box marginTop="120px" px="55px" gap="" mb="146px">
          <TotalArea />
          <Box height="15px" />
          <Fazendas
            currentFarm={currentFarm}
            handleChangeCurrentFarm={setCurrentFarm}
          />
          {currentFarm && (
            <>
              <FarmDetails currentFarm={currentFarm} />
            </>
          )}
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};
