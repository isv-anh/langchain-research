import { HumanMessage } from "@langchain/core/messages";
import { app } from "./agent/graph.js";


const result = await app.invoke({
  messages: [
    new HumanMessage("Xin chào"),
  ],
});

console.log(result.messages);