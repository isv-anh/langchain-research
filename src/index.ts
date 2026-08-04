import "dotenv/config";
import { HumanMessage } from "@langchain/core/messages";
import { app } from "./agent/graph.js";
import { checkpointer } from "./checkpointer/checkpointer.js";


await checkpointer.setup();

const result = await app.invoke({
  messages: [
    new HumanMessage("tôi sống ở đâu"),
  ],
}, {
  configurable: {
    thread_id: "thread-1",
  }
});

console.log(result.messages);