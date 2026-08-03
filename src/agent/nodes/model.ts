
import "dotenv/config";
import { weatherModel } from "../../models/weather-model.js";
import type { State } from "../state.js";

export async function modelNode(state: State) {
  const response = await weatherModel.invoke(state.messages);

  return {
    messages: [response],
  };
}