import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyCO3KFTguNmvZV3qXe5LdxcbuqwHFH37YI"; // Using your API key directly
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    try {
      const result = await model.generate({
        prompt,
        ...generationConfig,
      });
      console.log(result.response);
      return response.text();
    } catch (error) {
      console.error("Error generating response:", error);
    }
  }
  
  export default run;
  