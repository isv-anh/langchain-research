import { graph } from "./graph.js";

const app = graph.compile();


const result = await app.invoke({
  name: "Hoang Anh",
  age: 22,
});

console.log(result);