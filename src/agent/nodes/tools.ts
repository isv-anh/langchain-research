import { ToolNode } from "@langchain/langgraph/prebuilt";
import { weatherTool } from "../../tools/weather.js";
import { END } from "@langchain/langgraph";
import { AIMessage } from "langchain";

export function shouldContinue(state: any) {
 const lastMessage = state.messages[state.messages.length - 1];
 const toolCalls = lastMessage?.tool_calls ?? [];
 
 if (
    lastMessage instanceof AIMessage &&
    toolCalls.length > 0
  ) {
    return "tools";
  }
 return END;
}

export const weatherToolNode = new ToolNode([weatherTool]);