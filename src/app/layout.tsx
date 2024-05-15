"use client";
import "../styles/globals.css";
import ToggleColorMode from "@/components/ToggleColorMode";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Box, CssBaseline, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { persistStore } from "redux-persist";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let persister = persistStore(store);
  return (
    <html>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persister} />
          <ToggleColorMode>
            <CssBaseline />
            <Box
              component={motion.div}
              initial="pageInitial"
              animate="pageAnimate"
              sx={{
                height: "100vh",
                position: "relative",
                backgroundColor: "background.default",
              }}
              variants={{
                pageInitial: {
                  opacity: 0,
                },
                pageAnimate: {
                  opacity: 1,
                  transition: { ease: "anticipate", delay: 0.3 },
                },
              }}
            >
              {children}
            </Box>
          </ToggleColorMode>
        </Provider>
      </body>
    </html>
  );
}
