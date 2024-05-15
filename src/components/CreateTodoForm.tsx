import { TodoState } from "@/interfaces/TodoState";
import { useAppDispatch } from "@/store/reduxHooks";
import { setTodo } from "@/store/todoReducer";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const CreateTodoForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TodoState>({ defaultValues: { color: "#000" } });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TodoState> = (data) => {
    dispatch(setTodo({ id: new Date().getTime(), ...data }));
  };

  return (
    <Box>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          gap={5}
          width="100%"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TextField
            type="color"
            label="Vibe for the task"
            sx={{ width: "100%", borderRadius: "16px" }}
            {...register("color", {
              required: true,
              validate: (value) => !!value.trim(),
            })}
            InputProps={{ disableUnderline: true }}
          />
          <TextField
            sx={{ width: "100%" }}
            id="title"
            type="text"
            label="Title of the task *"
            variant="outlined"
            {...register("title", {
              required: true,
              validate: (value) => !!value.trim(),
            })}
            error={errors.title ? true : false}
          />

          <TextField
            id="Description"
            sx={{ width: "100%" }}
            type="text"
            multiline
            rows={15}
            label="Description of the task *"
            variant="outlined"
            {...register("description", {
              required: true,
              validate: (value) => !!value.trim(),
            })}
            error={errors.description ? true : false}
          />

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: "20px",
                p: 1,
                m: 3,
                width: "100%",
                px: 2,
              }}
              onClick={() => {}}
            >
              Tap, plan, conquer !
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

export default CreateTodoForm;
