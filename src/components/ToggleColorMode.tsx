"use client";

import { useAppSelector } from "@/store/reduxHooks";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import React, { FC, ReactNode, useMemo } from "react";

interface ToggleColorModeProps {
  children?: ReactNode;
}

const ToggleColorMode: FC<ToggleColorModeProps> = ({ children }) => {
  const mode = useAppSelector((state) => state.colorMode);

  const theme = useMemo(() => {
    const selectedPalette = mode.theme;

    return createTheme({
      typography: {
        fontWeightBold: 1.5,
        fontWeightMedium: 1.5,
        fontWeightRegular: 1.5,
        fontWeightLight: 1.5,
        allVariants: {
          letterSpacing: 2.2,
          animation: "ease",
          animationDuration: "1",
        },
      },
      components: {
        MuiButton: {
          defaultProps: {
            sx: {
              borderRadius: "16px",
            },
          },
        },
      },
      palette: {
        mode: mode.mode as PaletteMode,
        ...selectedPalette,
      },
    });
  }, [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ToggleColorMode;
