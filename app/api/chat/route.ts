import { createGroq } from "@ai-sdk/groq";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { getSystemPrompt } from "@/lib/chat/knowledge";

// Groq free tier. To swap models, change MODEL_ID. Solid options:
//   "llama-3.3-70b-versatile"    (default — best quality, 128k ctx)
//   "openai/gpt-oss-120b"         (newer, larger)
//   "llama-3.1-8b-instant"        (faster, smaller — for high-traffic mode)
const MODEL_ID = "llama-3.3-70b-versatile";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Chat is not configured. Missing GROQ_API_KEY." },
      { status: 500 }
    );
  }

  let body: { messages: UIMessage[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const groq = createGroq({ apiKey });
  const modelMessages = await convertToModelMessages(body.messages);

  const result = streamText({
    model: groq(MODEL_ID),
    system: getSystemPrompt(),
    messages: modelMessages,
    temperature: 0.3,
    onError({ error }) {
      console.error("[chat] stream error", error);
    },
  });

  return result.toUIMessageStreamResponse({
    onError: (error) => {
      const message = error instanceof Error ? error.message : String(error);
      if (/429|rate.?limit/i.test(message)) {
        return "The chat is busy right now. Try again in a minute.";
      }
      console.error("[chat] response error", error);
      return "Something went wrong reaching the model. Please try again.";
    },
  });
}
