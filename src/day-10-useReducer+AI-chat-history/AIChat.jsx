import React, { useReducer, useState } from "react";
import { FetchAIResponse } from "./FetchAIResponse";
import { ChatReducer, initialState } from "./ChatReducer";
import ChatBubble from "./ChatBubble";
import "./chat.css";

const AIChat = () => {
  const [state, dispatch] = useReducer(ChatReducer, initialState);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");

    dispatch({
      type: "USER_MESSAGE",
      payload: { role: "user", content: userMessage },
    });

    const aiReply = await FetchAIResponse([
      ...state.messages,
      { role: "user", content: userMessage },
    ]);

    dispatch({
      type: "AI_MESSAGE",
      payload: { role: "ai", content: aiReply },
    });
  };

  return (
    <div className="chat-container">
      <h2>AI Chat App</h2>

      <div className="chat-box">
        {state.messages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} content={msg.content} />
        ))}
        {state.loading && <p className="typing">AI is typing...</p>}
      </div>

      <div className="input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AIChat;