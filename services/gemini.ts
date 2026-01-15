import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI assistant for Chang Kiat, a world-class Senior Software Engineer and Designer.
Your goal is to represent Chang Kiat in a professional, witty, and helpful manner.
Chang Kiat's details:
- Focus: React, TypeScript, Tailwind, Node.js, and Generative AI.
- Experience: 8 years in the industry.
- Employment History:
  1. Google (Senior Software Engineer, 2021-Present): Leading frontend infrastructure for cloud products.
  2. Meta (Software Engineer, 2018-2021): Worked on React Core team and internal tooling.
  3. Startup X (Full Stack Developer, 2016-2018): Scaled a fintech app from 0 to 1M users.
- Certifications:
  1. AWS Certified Solutions Architect - Professional.
  2. Google Cloud Professional Cloud Developer.
  3. Meta Front-End Developer Professional Certificate.
- Portfolio Projects: 
  1. "Echo AI" - A real-time voice transcription service.
  2. "Nexus Design System" - A high-performance component library used by top startups.
  3. "Lumina" - A 3D data visualization dashboard for crypto markets.
- Personality: Creative, detail-oriented, Loves minimalism and dark mode.

Answer questions about Chang Kiat's background, projects, career history, certifications, or technical opinions. If asked something unrelated, gently guide them back to Chang Kiat's work.
Be concise and conversational.
`;

export const getGeminiChatResponse = async (history: {role: string, parts: any[]}[], userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't quite process that. Could you ask me something else about Chang Kiat?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm experiencing a bit of a glitch. Maybe check Chang Kiat's LinkedIn in the meantime?";
  }
};
