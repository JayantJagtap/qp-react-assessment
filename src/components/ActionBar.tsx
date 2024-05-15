import { Box, Paper, Typography } from "@mui/material";
import GreetAnimation from "../animations/enageAnimation.json";
import Lottie from "lottie-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ModalPopup from "@/utils/ModalPopUp";
import CreateTodoForm from "./CreateTodoForm";
import ColorSwitchToggle from "./ColorSwitchToggle";

const ActionBar = () => {
  const [createTodo, setCreateTodo] = useState(false);

  return (
    <Box sx={{ width: "100%", position: "sticky", top: 8, zIndex: 40 }}>
      <Paper
        elevation={2}
        sx={{
          m: 1,
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            flex: 7,
          }}
        >
          <Box
            sx={{
              width: "180px",
              height: "180px",
              zIndex: 2,
            }}
          >
            <Lottie animationData={GreetAnimation} />
          </Box>
          <Box>
            <Typography variant="h6">
              Hello there!
              <br /> Ready to conquer your to-do list?
              <br /> Let`s make today super productive together! What`s on your
              agenda?
            </Typography>
          </Box>
        </Box>
        <Box
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          sx={{
            borderRadius: "16px",
            backgroundColor: "background.default",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "fit-content",
            p: 2,
            flex: 1,
          }}
          onClick={() => {
            setCreateTodo((prev) => (prev = !prev));
          }}
        >
          <Typography variant="button">Create task +</Typography>
        </Box>
        <ColorSwitchToggle />

        <ModalPopup
          setTriggerFnc={setCreateTodo}
          trigger={createTodo}
          maxWidths="xl"
          title={
            <Typography variant="h4" sx={{ p: 5 }}>
              ✨ Ready to crush your goals ✨
            </Typography>
          }
        >
          <CreateTodoForm />
        </ModalPopup>
      </Paper>
    </Box>
  );
};

export default ActionBar;
