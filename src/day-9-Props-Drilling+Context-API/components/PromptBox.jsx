import { useContext , useState} from "react";
import { AISettingsContext } from "../Context/AISettingsContext";

function PromptBox() {
    const { language, tone } = useContext(AISettingsContext);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
    const askAI = async () => {
      if (!prompt) return;
  
      setLoading(true);
      setResponse("");
  
      const fullPrompt = `
  Write the following text in ${language} language with ${tone} tone:
  "${prompt}"
      `;
  
      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "user", content: fullPrompt }
            ],
          }),
        });
  
        const data = await res.json();
        setResponse(data.choices[0].message.content);
      } catch (error) {
        setResponse("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    return (
      
        <div className="">
        <textarea className="w-[100%] h-[100px] border-2 p-4 mt-5 mb-2"
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
       
        <br/>
        <button  className="mt-5 mb-2" onClick={askAI}>Generate</button>
       
        {loading && <p >AI is thinking... 🤖</p>}
        {response && <p className="mt-5 mb-5">{response}</p>}
      </div>
    );
  }
  
  export default PromptBox;
