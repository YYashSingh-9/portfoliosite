import { Box } from "@mui/material";
import classes from "./BackgroundLine.module.css";
import { motion } from "framer-motion";

const BackgroundLine = () => {
  // SVG Path data for the large elegant arc
  const curvePath = "M 50,500 C 300,600 800,500 950,150";
  return (
    <>
      <Box className={classes.bckgrnd}>
        <svg
          className={styles.svgCanvas}
          viewBox="0 0 1000 600" // Virtual coordinate canvas size
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <motion.path
            d={curvePath}
            stroke={"#000000"}
            strokeWidth={"0.5"}
            opacity={0.2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d={curvePath}
            stroke={"#000000"}
            strokeWidth={"4"}
            strokeLinecap={"round"}
            initial={{ pathLength: 0, strokeDasharray: "0 1" }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
            style={{
              pathLength: 0.001,
            }}
          />
          <motion.circle 
          cx="950" 
          cy={"150"} 
          r={2.5} 
          fill={"#000000"} 
          initial={{opacity=0}} 
          animate={{opacity:1}} 
          transition={{ delay: 2.3, duration: 0.4 }}/>
        </svg>
      </Box>
    </>
  );
};

export default BackgroundLine;
