import { END, START, StateGraph } from "@langchain/langgraph";
import { StateAnnotation } from "./state.js";
import { shouldContinue, weatherToolNode } from "./nodes/tools.js";
import { modelNode } from "./nodes/model.js";
import { checkpointer } from "../checkpointer/checkpointer.js";

export const graph = new StateGraph(StateAnnotation)
  .addNode("model", modelNode)
  .addNode("tools", weatherToolNode)
  .addEdge(START, "model")
  .addConditionalEdges(
    "model",
    shouldContinue,
    {
      tools: "tools",
      [END]: END,
    }
  )
  .addEdge("tools", "model");


export const app = graph.compile({
  checkpointer: checkpointer
});