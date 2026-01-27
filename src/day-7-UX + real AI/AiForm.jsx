import { useState } from "react";

function AiForm() {
  const [formData, setFormData] = useState({
    prompt: "",
    tone: "formal",
  });

  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.prompt.trim() === "") {
      setError("Prompt is required");
      return;
    }

    setError("");
    setResponse("");
    setLoading(true);

    try {
      setTimeout(() => {
        setResponse(
          `🤖 AI (${formData.tone}) response for: "${formData.prompt}"`
        );
        setLoading(false);
      }, 2000);
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px" }}>
      <h2>AI Prompt Generator</h2>

      <input
        type="text"
        name="prompt"
        placeholder="Enter prompt"
        value={formData.prompt}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px" }}
      />

      <select
        name="tone"
        value={formData.tone}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginTop: "10px" }}
      >
        <option value="formal">Formal</option>
        <option value="casual">Casual</option>
      </select>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        {loading ? "Generating..." : "Generate AI Response"}
      </button>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <h4>Response:</h4>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default AiForm;
