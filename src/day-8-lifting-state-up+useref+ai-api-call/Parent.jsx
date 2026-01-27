import { useState, useRef } from "react";
import PromptInput from "./PromptInput";
import AIResponse from "./AIResponse";

const Parent = () => {
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;;

  const askAI = async () => {
    if (!prompt) return;

    setLoading(true);
    setAiResponse("");

    try {
      // 🔴 DEMO API CALL (replace with real API later)
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();

      // Demo response
      setAiResponse(data.choices[0].message.content);

    } catch (error) {
      setAiResponse("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>AI Prompt Generator</h2>

      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        askAI={askAI}
        inputRef={inputRef}
        
      />

      <button onClick={focusInput} style={{ marginTop: "10px" }}>
        Focus Input
      </button>

      <AIResponse response={aiResponse} loading={loading} />
    </div>
  );
}

export default Parent;
