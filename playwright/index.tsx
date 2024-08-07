// Import styles, initialize component theme here.
// import '../src/common.css';
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../src/App.css";
import "../src/index.css";
import { beforeMount } from "@playwright/experimental-ct-react/hooks";

beforeMount(async ({ App }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
});
