import {
  Annotation,
  MessagesAnnotation,
} from "@langchain/langgraph";

export const StateAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec,

  userName: Annotation<string>(),

  age: Annotation<number>(),

  city: Annotation<string>(),

  job: Annotation<string>(),
});

export type State = typeof StateAnnotation.State;