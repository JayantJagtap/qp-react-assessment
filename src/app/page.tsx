"use client";
import { useAppSelector } from "@/store/reduxHooks";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import IntroAnimation from "../animations/introAnimation.json";
import { useEffect, useState } from "react";

export default function Home() {
  const color = useAppSelector((state) => state.colorMode);
  const sentence = "TaskMaster ToDo";

  const router = useRouter();
  const [startExitAnimation, setStartExitAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartExitAnimation(true);
    }, 5000);

    const timeoutNavigate = setTimeout(() => {
      router.push("/todo");
    }, 8000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeoutNavigate);
    };
  }, []);
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          flex: 1,
        }}
      >
        <Typography variant="h1">
          {sentence.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 200, opacity: 0 }}
              style={{ whiteSpace: "pre" }}
              transition={{
                delay: index * 0.05,
                duration: 1,
                ease: "easeOut",
              }}
              animate={
                startExitAnimation
                  ? { y: -200, opacity: 0 }
                  : { y: 0, opacity: 1 }
              }
            >
              {char}
            </motion.span>
          ))}
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flex: 1,
        }}
      >
        <Box
          sx={{
            zIndex: 2,
          }}
        >
          <Lottie animationData={IntroAnimation} />
        </Box>
      </Box>
    </Box>
  );
}
