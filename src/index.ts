import "dotenv/config";
import { HumanMessage } from "@langchain/core/messages";
import { app } from "./agent/graph.js";


const result = await app.invoke({
  messages: [
    new HumanMessage("Xin chào, thời tiết thành phố HCM thế nào"),
  ],
});

console.log(result.messages);