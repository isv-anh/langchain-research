import { END, START, StateGraph } from "@langchain/langgraph";
import { StateAnnotation } from "./state.js";
import { greetNode } from "./greet-node.js";
import { increaseAgeNode } from "./increment-node.js";

export const graph = new StateGraph(StateAnnotation)
  .addNode("greet", greetNode)
  .addNode("increaseAge", increaseAgeNode)
  .addEdge(START, "greet")
  .addEdge("greet", "increaseAge")
  .addEdge("increaseAge", END);
  