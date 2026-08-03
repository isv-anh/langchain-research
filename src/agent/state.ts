import { MessagesAnnotation } from "@langchain/langgraph";

export const StateAnnotation = MessagesAnnotation;

export type State = typeof MessagesAnnotation.State;