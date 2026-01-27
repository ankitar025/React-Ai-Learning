import React from 'react'
import { useState } from "react";


const AiGpt = () => {

    const [prompt, setPrompt] = useState("");
    const [error, setError] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;;

    const handleChange = (e) => {
        setPrompt(e.target.value)
    }

    const handleSubmit = async () => {

        if(!prompt.trim()){
            setError("Prompt is required");
            return
        }
        setLoading(true)
        setError("")
        setResponse("")


        try{
            const res = await fetch("https://api.openai.com/v1/chat/completions", {
                method:"POST",
                headers:{
                    "content-type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: prompt }],
                  }),

            })
            const data = await res.json();
            setResponse(data.choices[0].message.content);

        }catch(err){
            setError("Fail to loading Content")
        }finally {
            setLoading(false);
          }
    }

  return (
     <div className='max-w-[600px] text-left'>
      {/* <h2>AI Prompt Generator</h2> */}

      <input
        rows = "4"
        type="text"
        placeholder="Enter prompt"
        value={prompt}
        onChange={handleChange}
        className="border p-4 rounded-md min-w-[350px] "
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="ml-4 p-5 min-h-[57px] min-w-[199px]"
      >
        {loading ? "Generating..." : "Generate AI Response"}
      </button>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <h4 className='text-2xl mb-5'>Response:</h4>
          <p className='text-xl'>{response}</p>
        </div>
      )}
    </div>
  )
}

export default AiGpt