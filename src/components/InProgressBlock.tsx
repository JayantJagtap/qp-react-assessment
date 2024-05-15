"use client";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { TodoState } from "@/interfaces/TodoState";
import { removeInProgress, setInProgress } from "@/store/inProgressReducer";
import { setInDone } from "@/store/doneReducer";
import NodataAnimation from "../animations/noDataAnimation.json";
import Lottie from "lottie-react";

const hexToRgb = (hex: string) => {
  const formattedHex = hex.startsWith("#") ? hex.slice(1) : hex;
  const r = parseInt(formattedHex.substring(0, 2), 16);
  const g = parseInt(formattedHex.substring(2, 4), 16);
  const b = parseInt(formattedHex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const InProgressBlock = () => {
  const [moveTodos, setMoveTodos] = useState<TodoState[]>([]);
  const InProgress = useAppSelector((state) => state.inProgress);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (todo: Partial<TodoState>, checked: boolean) => {
    if (checked) {
      setMoveTodos((prevMoveTodos) => [...prevMoveTodos, todo as TodoState]);
    } else {
      setMoveTodos((prevMoveTodos) =>
        prevMoveTodos.filter((todo) => todo.id !== todo.id)
      );
    }
  };

  const MoveToDone = () => {
    moveTodos.map((i) => i && dispatch(setInDone(i)));
    moveTodos.map((i) => i && i.id && dispatch(removeInProgress(i.id)));
    setMoveTodos([]);
  };

  return (
    <Box sx={{ m: 2 }}>
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Typography variant="h3">In Progress</Typography>
        <AnimatePresence>
          {moveTodos.length > 0 && (
            <Button
              variant="contained"
              component={motion.button}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              onClick={MoveToDone}
            >
              Move to Done
            </Button>
          )}
        </AnimatePresence>
      </Stack>

      <AnimatePresence>
        {InProgress.length > 0 ? (
          <>
            {InProgress.map((items, k) => (
              <Card
                key={items?.id}
                sx={{
                  backgroundColor: `rgba(${hexToRgb(items!.color!)}, 0.1)`,
                  p: 2,
                  my: 1,
                }}
                component={motion.div}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <Stack
                  direction={"row"}
                  gap={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box sx={{ width: "90%" }}>
                    <Typography>{items?.title}</Typography>
                    <Typography>{items?.description}</Typography>
                  </Box>
                  <Checkbox
                    {...label}
                    sx={{ height: "20px", width: "20px" }}
                    onChange={(e) =>
                      items &&
                      items.id &&
                      handleCheckboxChange(items, e.target.checked)
                    }
                  />
                </Stack>
              </Card>
            ))}
          </>
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "180px",
                height: "180px",
                zIndex: 2,
              }}
            >
              <Lottie animationData={NodataAnimation} />
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default InProgressBlock;
