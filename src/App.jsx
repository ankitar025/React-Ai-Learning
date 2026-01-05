import { useState } from "react";

function App() {
  // State for user input
  const [prompt, setPrompt] = useState("");

  // State for AI response
  const [response, setResponse] = useState("");

  // Button click handler
  const handleClick = () => {
    setResponse("This is an AI-generated response.");
  };

  return (
    <div className="p-10 text-center flex justify-center items-center flex-col">
      <h2 className="text-5xl pb-9">React + AI Demo</h2>


      {/* Input box */}
      <input
        type="text"
        placeholder="Enter your question"
        className="border p-4 rounded-md min-w-[350px] "
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />


      {/* Button */}
      <button onClick={handleClick} className="m-3 min-w-[200px]">
        Ask AI
      </button>
      
      

      {/* Output area */}
      <div className="text-3xl mb-5 mt-5"><strong>AI Response:</strong></div>
      <p>{response}</p>
    </div>
  );
}

export default App;
