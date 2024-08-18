import React from "react";
import { motion, useScroll } from "framer-motion";

function FadeIn({children, delay}) {
  return <motion.div
  initial={{opacity: 0,}}
  whileInView={{opacity: 1,}}
  transition={{duration: 1, delay: delay}}
  style={{height: 'calc(100vh - 64px)', width: '100%'}}
  >{children}</motion.div>;
}

export default FadeIn;
