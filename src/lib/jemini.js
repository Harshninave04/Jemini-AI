/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'

const apiKey = "AIzaSyBcwhB5jO9KSGc_WRKz1Mwk0e0gT72cAw0";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: 'user',
        parts: [{ text: 'javascript\n' }],
      },
      {
        role: 'model',
        parts: [
          {
            text: '```javascript\n// This is a simple JavaScript code example\n\n// Define a variable and assign it a value\nconst message = "Hello, world!";\n\n// Log the message to the console\nconsole.log(message);\n\n// Define a function\nfunction addNumbers(a, b) {\n  return a + b;\n}\n\n// Call the function and log the result\nconst sum = addNumbers(5, 3);\nconsole.log("The sum is:", sum);\n\n// Create an array\nconst colors = ["red", "green", "blue"];\n\n// Iterate over the array and log each color\nfor (const color of colors) {\n  console.log(color);\n}\n\n// Create an object\nconst person = {\n  name: "John Doe",\n  age: 30\n};\n\n// Access and log the properties of the object\nconsole.log("Name:", person.name);\nconsole.log("Age:", person.age);\n\n// Use a conditional statement\nif (person.age >= 18) {\n  console.log("You are an adult.");\n} else {\n  console.log("You are not an adult yet.");\n}\n```\n\n**Explanation:**\n\n* **Comments:** Lines starting with `//` are comments, which are ignored by the interpreter.\n* **Variables:** `const` and `let` are used to declare variables. `const` declares a constant variable, while `let` declares a variable that can be reassigned.\n* **Functions:** Functions are blocks of code that perform specific tasks. They can be defined using the `function` keyword.\n* **Arrays:** Arrays are ordered collections of elements. They are created using square brackets `[]`.\n* **Objects:** Objects are collections of key-value pairs. They are created using curly braces `{}`.\n* **Conditional Statements:** `if` and `else` statements are used to execute different code blocks based on a condition.\n* **Loops:** `for` loops are used to iterate over arrays or other iterable objects.\n\nThis code demonstrates some basic JavaScript concepts, such as variables, functions, arrays, objects, and conditional statements. You can modify and experiment with this code to learn more about JavaScript programming.\n',
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
}

export default run;
