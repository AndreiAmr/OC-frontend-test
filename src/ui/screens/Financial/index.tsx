import { motion, AnimatePresence } from "framer-motion";

export const Financial = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
      >
        <div>Financial</div>
      </motion.div>
    </AnimatePresence>
  );
};
