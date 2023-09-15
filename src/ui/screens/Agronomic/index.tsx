import { motion, AnimatePresence } from "framer-motion";

import { Box } from "@chakra-ui/react";
import { TotalArea } from "./components/TotalArea";
import { Fazendas } from "./components/Fazendas";

export const Agronomic = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
      >
        <Box marginTop="120px" px="55px" gap="">
          <TotalArea />
          <Box height="15px" />
          <Fazendas />
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};
