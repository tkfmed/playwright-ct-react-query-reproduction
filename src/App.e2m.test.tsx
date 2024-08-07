import { test, expect } from "@playwright/experimental-ct-react";
import App from "./App";
import { http, HttpResponse } from "msw";

test("should work", async ({ mount, router  }) => {
  await router.use(http.get('/api/test', async () => {
    return HttpResponse.json(1337);
  }));

  const component = await mount(<App />);
  await expect(component).toContainText("count is 1337");

  component.getByRole("button").click();

  await expect(component).toContainText("count is 1338");
});
