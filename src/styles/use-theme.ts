import { useContext } from "react";

import { ThemeContext } from "./theme-context";
import { Theme } from "./theme";

export const useTheme = (): Theme => useContext(ThemeContext);
