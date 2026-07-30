import type { State } from "./state.js";

export const greetNode = async (state: State) => {
  console.log(`Hello ${state.name}`);
  return {};
};