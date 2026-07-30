import "dotenv/config";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { weatherTool } from "./weather-tool.js";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.5-flash",
  temperature: 0.2,
});

const modelWithTools =
  model.bindTools([
    weatherTool
  ]);

const response = await modelWithTools.invoke(
  "Nhiệt độ TPHCM"
);

const toolCall = response.tool_calls?.[0];

if (toolCall?.name === "weather") {
  const result = await weatherTool.invoke(toolCall);

  console.log(result);
}