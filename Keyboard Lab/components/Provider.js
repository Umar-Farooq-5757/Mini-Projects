"use client";

import { AppProvider } from "@/contexts/AppContext";

export default function Provider({ children }) {
  return <AppProvider>{children}</AppProvider>;
}
