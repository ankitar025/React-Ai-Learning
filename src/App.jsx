import { useState } from "react";
import InputBox from "./day-3-Components+AI/Components/InputBox";
import Button from "./day-3-Components+AI/Components/Button";
import OutputBox from "./day-3-Components+AI/Components/OutputBox";
import Index from "./day-6-forms-ai-chat/Index";
import AiForm from "./day-7-UX + real AI/AiForm";
import AiGpt from "./day-7-UX + real AI/AiGpt";
import Parent from "./day-8-lifting-state-up+useref+ai-api-call/Parent";

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

      {/* <InputBox
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Button lick={handleAskAI} />

      <OutputBox response={response} /> */} 
      {/* <Index/> */}
      {/* <Index/> */}

      {/* <AiForm/> */}
      {/* <AiGpt/> */}
      
      <Parent/>
      
      
    </div>

   
  );
}

export default App;
