"use client";
import { BaseAnimation } from "../../animations/baseAnimations";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import ActionBar from "@/components/ActionBar";
import dynamic from "next/dynamic";

const TodoBlock = dynamic(() => import("../../components/TodoBlock"), {
  ssr: false,
});

const InProgressBlock = dynamic(
  () => import("../../components/InProgressBlock"),
  {
    ssr: false,
  }
);

const InDoneBlock = dynamic(() => import("../../components/InDoneBlock"), {
  ssr: false,
});

const page = () => {
  return (
    <Box>
      <ActionBar />
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            overflowY: "hidden",
          }}
        >
          <Grid item md={12} lg={12} sm={12} xl={4}>
            <Box
              component={motion.div}
              variants={BaseAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <TodoBlock />
            </Box>
          </Grid>

          <Grid
            item
            md={12}
            lg={12}
            sm={12}
            xl={4}
            //sx={{ border: "1.5px dashed", borderColor: "primary.main" }}
          >
            <Box
              component={motion.div}
              variants={BaseAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <InProgressBlock />
            </Box>
          </Grid>

          <Grid
            item
            md={12}
            lg={12}
            sm={12}
            xl={4}
            //sx={{ border: "1.5px dashed", borderColor: "primary.main" }}
          >
            <Box
              component={motion.div}
              variants={BaseAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <InDoneBlock />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default page;
