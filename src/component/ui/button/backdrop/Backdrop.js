import React from "react";
import "./Backdrop.css";
import { AnimatePresence, motion } from "framer-motion";

const Backdrop = (props) => {
  return (
    <AnimatePresence>
      {props.show?(
        <motion.div
          className="Backdrop"
          data-testid="backdrop"
          onClick={props.backdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />):null
      }
    </AnimatePresence>
  );
};

export default React.memo(Backdrop);
