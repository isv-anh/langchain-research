import { tool } from "@langchain/core/tools";
import { z } from "zod";

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

export const getUserTool = tool(
  async ({ userId }: { userId: number }) => {
    console.log(`
  Call method GetUser
  WITH PARAMS
  
  userId: ${userId}
  `);
  },
  {
    name: "get_user",
    description: "Lấy thông tin user",
    schema: z.object({
      userId: z.number(),
    }),
  },
);
