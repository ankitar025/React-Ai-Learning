function AIResponse({ response, loading }) {
    return (
      <div style={{ marginTop: "20px" }}>
        <strong>AI Response:</strong>
  
        {loading && <p>Thinking... 🤖</p>}
  
        {!loading && response && <p>{response}</p>}
      </div>
    );
  }
  
  export default AIResponse;
  