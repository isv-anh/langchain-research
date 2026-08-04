import "dotenv/config";
import { HumanMessage } from "@langchain/core/messages";
import { app } from "./agent/graph.js";
import { checkpointer } from "./checkpointer/checkpointer.js";


await checkpointer.setup();

const result = await app.invoke({
  messages: [
    new HumanMessage("Tôi tên là Hoàng Anh, 24 tuổi, sống ở Củ Chi."),
  ],
}, {
  configurable: {
    thread_id: "thread-4",
  }
});

console.dir(result, { depth: null });