export const FetchAIResponse = async (messages) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const formattedMessages = [
    {
      role: "system",
      content:
        "You are ChatGPT. Reply exactly like ChatGPT. If code is needed, use markdown code blocks. If normal question, reply in friendly text.",
    },
    ...messages.map((m) => ({
      role: m.role === "ai" ? "assistant" : "user",
      content: m.content,
    })),
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: formattedMessages,
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
};
