import { Annotation } from "@langchain/langgraph";

export const StateAnnotation = Annotation.Root({
  name: Annotation<string>,
  age: Annotation<number>,
});

export type State = typeof StateAnnotation.State;