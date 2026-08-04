import { tool } from "langchain";
import z from "zod";

export const calcTool = tool(
  async ({ expression }) => {
    return String(eval(expression));
  },
  {
    name: "calculator",

    description: "Sử dụng tool này khi người dùng yêu cầu tính toán các biểu thức toán học như cộng, trừ, nhân, chia hoặc có dấu ngoặc.",

    schema: z.object({
      expression: z.string(),
    }),
  },
);
