import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError("Please enter a message");
      return;
    }

    setError("");
    setResponse("AI is thinking...");

    setTimeout(() => {
      setResponse(`AI Response for: "${prompt}"`);
      setPrompt("");
    }, 1500);
  };

  return (
    <div>
      <h2>Day 7 – AI Chat Input</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask AI something..."
        />
        <button type="submit">Send</button>
      </form>

      {error && <p>{error}</p>}
      {response && <p>{response}</p>}
    </div>
  );
}

export default App;
