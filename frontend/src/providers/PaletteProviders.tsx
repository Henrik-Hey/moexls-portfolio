import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from "styled-components";
import { theme as main } from "../shared/theme";

export interface PaletteInterface {
  theme?: DefaultTheme;
  setTheme?: Dispatch<SetStateAction<DefaultTheme>>;
}

interface PaletteProviderProps {
  children: React.ReactChildren | React.ReactNode;
}

const PaletteContext = React.createContext({} as PaletteInterface);

const Themes = {
  main,
};

const PaletteProvider = (props: PaletteProviderProps) => {
  const [theme, setTheme] = useState(main);

  const value: PaletteInterface = { theme, setTheme };
  return (
    <PaletteContext.Provider value={value}>
      <ThemeProvider theme={Themes.main}>
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </PaletteContext.Provider>
  );
};

const usePaletteContext = () => {
  const context = useContext(PaletteContext);
  if (!context)
    throw new Error(
      "usePaletteContext cannot be used outside of a PaletteProvider"
    );
  return context;
};

const GlobalStyles = createGlobalStyle`
    #__next {
        background: #fff;
        transition: all 0.3s;
        width: 100vw;
        height: 100vh;
    }
`;

export { PaletteProvider, usePaletteContext };
