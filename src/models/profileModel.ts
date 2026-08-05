import { profileSchema } from "../shcema/profile.js";
import { model } from "./openrouter.js";

export const profileModel = model.withStructuredOutput(profileSchema);