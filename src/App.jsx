import { useState } from "react";
import InputBox from "../day-3-components+AI/Components/InputBox";
import Button from "../day-3-components+AI/Components/Button";
import OutputBox from "../day-3-components+AI/Components/OutputBox";
import Index from "../day-5-fetch+AI";

// import Index from "../day-4-useEffect + API Flow/Index";


function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleAskAI = async () => {
    setResponse("AI is thinking...");
  
    setTimeout(() => {
      setResponse(`AI Response for: ${prompt}`);
    }, 1500);
  };
  

  return (
    <div className="p-10 text-center flex justify-center items-center flex-col">
      <h2 className="text-5xl pb-9">React + AI Learning</h2>

      <InputBox
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Button onClick={handleAskAI} />

      <OutputBox response={response} />

      
      <Index/>
      
    </div>

   
  );
}

export default App;
