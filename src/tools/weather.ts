import { tool } from "langchain";
import z from "zod";

export const weatherTool = tool(
  async ({ city }) => {
    return `Hiện tại ${city} là 38°C`;
  },
  {
    name: "weather",

    description: "Lấy thời tiết hiện tại",

    schema: z.object({
      city: z.string(),
    }),
  },
);
