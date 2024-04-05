// ClientThemeWrapper.tsx
"use client";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ClientThemeWrapper({ children }: any) {
  // useEffect(() => {
  //   setToggleTheme(theme === "light");
  // }, [theme]);


  const { theme } = useContext(ThemeContext);

  return <div data-theme={theme}>
    {children}
  </div>
}