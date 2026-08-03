import { END, START, StateGraph } from "@langchain/langgraph";
import { StateAnnotation } from "./state.js";
import { modelNode } from "./nodes/model.js";

export const graph = new StateGraph(StateAnnotation)
  .addNode("model", modelNode)
  .addEdge(START, "model")
  .addEdge("model", END);


export const app = graph.compile();