"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // Evita refetch inmediato
      },
    },
  });
}
let BrowserQueryClient: QueryClient | undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  } else {
    if (BrowserQueryClient === undefined)
      BrowserQueryClient = makeQueryClient();
  }
  return BrowserQueryClient;
}

export function TanstackProvider({ children }: { children: React.ReactNode }) {
  const [cliente] = useState(() => getQueryClient());

  return <QueryClientProvider client={cliente}>{children}</QueryClientProvider>;
}
