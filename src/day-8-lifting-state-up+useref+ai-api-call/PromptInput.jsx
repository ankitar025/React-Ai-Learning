function PromptInput({ prompt, setPrompt, askAI, inputRef }) {
    return (
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask something from AI..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
  
        <button onClick={askAI} style={{ marginTop: "10px" }}>
          Ask AI
        </button>
      </div>
    );
  }
  
  export default PromptInput;
  