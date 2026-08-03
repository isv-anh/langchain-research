import { weatherTool } from "../tools/weather.js";
import { model } from "./openrouter.js";


export const weatherModel = model.bindTools([weatherTool]);