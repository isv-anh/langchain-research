import "dotenv/config";
import { HumanMessage } from "@langchain/core/messages";
import { app } from "./agent/graph.js";


const result = await app.invoke({
  messages: [
    new HumanMessage("Lấy nhiệt độ của HCM hiện tại + thêm 2"),
  ],
});

console.log(result.messages);