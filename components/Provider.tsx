/**
 * Este Provider sirve los contextode de Material Tailwind y React Query
 */
"use client";
import { ThemeProvider, Button, Theme } from "@material-tailwind/react";
export { ThemeProvider, Button };

/*
Objeto para customizar el Tema de Material Tailwind
*/
const customTheme: Theme = {};
export function MaterialProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider value={customTheme}>{children}</ThemeProvider>;
}
