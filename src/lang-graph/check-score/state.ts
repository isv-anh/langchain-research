import { Annotation } from "@langchain/langgraph";

export const ScoreAnnotation = Annotation.Root({
    score: Annotation<number>
});

export type ScoreType = typeof ScoreAnnotation.State;