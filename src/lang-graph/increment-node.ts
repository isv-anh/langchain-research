import type { State } from "./state.js";

export const increaseAgeNode = async (state: State) => {
  return {
    age: state.age + 1,
  };
};