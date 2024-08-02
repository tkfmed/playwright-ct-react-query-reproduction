import { test, expect } from "@playwright/experimental-ct-react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

test.use({ viewport: { width: 500, height: 500 } });

test("should work", async ({ mount }) => {
  const component = await mount(
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  );
  await expect(component).toContainText("and save to test HMR");
});
