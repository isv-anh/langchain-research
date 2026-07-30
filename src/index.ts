import "dotenv/config";

import { z } from "zod";

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "langchain";
import { ChatPromptTemplate, PromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "@langchain/core/output_parsers";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.5-flash",
  temperature: 0.2,
});


const schema = z.object({
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
});

const structuredModel = model.withStructuredOutput(schema);

const parser = StructuredOutputParser.fromZodSchema(schema);

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "Bạn là Senior Backend Engineer."
  ],
  [
    "human",
    "Giải thích {topic}"
  ]
]);



const chain = prompt.pipe(structuredModel);

// const chain = prompt
//   .pipe(model)
//   .pipe(parser);

const response = await chain.invoke({
  topic: "Docker"
})

console.log(response);

