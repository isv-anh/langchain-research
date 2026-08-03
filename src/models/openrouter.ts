
import { ChatOpenAI } from "@langchain/openai";

export const model = new ChatOpenAI({
  model: "openrouter/free",
  apiKey: process.env.OPENROUTER_API_KEY,
  configuration: {
    baseURL: "https://openrouter.ai/api/v1",
  },
});
