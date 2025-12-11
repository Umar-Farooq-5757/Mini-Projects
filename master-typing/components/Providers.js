"use client";

import { AppProvider } from "@/contexts/AppContext";

export default function Providers({ children }) {
  return <AppProvider>{children}</AppProvider>;
}
