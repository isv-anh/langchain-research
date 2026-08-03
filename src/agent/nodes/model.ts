
import "dotenv/config";
import { model } from "../../models/gemini.js";
import type { State } from "../state.js";

export async function modelNode(state: State) {
  const response = await model.invoke(state.messages);

  return {
    messages: [response],
  };
}