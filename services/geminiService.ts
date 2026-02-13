
import { GoogleGenAI } from "@google/genai";

export async function generateSpiritualImage(prompt: string): Promise<string | null> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `High-quality aesthetic spiritual imagery. ${prompt}. Soft focus, ethereal lighting, elegant, minimalist, colors: soft blues, violet, warm white, gold accents. 16:9 aspect ratio.`
          }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return `https://picsum.photos/1200/800?random=${Math.random()}`;
  }
}
