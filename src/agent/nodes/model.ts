import "dotenv/config";
import { weatherModel } from "../../models/weather-model.js";
import type { State } from "../state.js";
import { HumanMessage } from "langchain";
import { profileModel } from "../../models/profileModel.js";

export async function modelNode(state: State) {
  const response = await weatherModel.invoke(state.messages);

  return {
    messages: [response],
  };
}

export async function extractProfileNode(state: State) {
  const lastMessage =
    state.messages[state.messages.length - 1];

  if (!(lastMessage instanceof HumanMessage)) {
    return {};
  }

  const profile = await profileModel.invoke([
    {
      role: "system",
      content:
        "Trích xuất thông tin người dùng. Nếu không có thì để trống.",
    },
    {
      role: "user",
      content: lastMessage.content,
    },
  ]);

  return profile;
}
