import { END, START, StateGraph } from "@langchain/langgraph";
import { StateAnnotation } from "./state.js";
import { shouldContinue, weatherToolNode } from "./nodes/tools.js";
import { extractProfileNode, modelNode } from "./nodes/model.js";
import { checkpointer } from "../checkpointer/checkpointer.js";
import { profileModel } from "../models/profileModel.js";

export const graph = new StateGraph(StateAnnotation)
  .addNode("profile", extractProfileNode)
  .addNode("model", modelNode)
  .addNode("tools", weatherToolNode)
  .addEdge(START, "profile")
  .addEdge("profile", "model")
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