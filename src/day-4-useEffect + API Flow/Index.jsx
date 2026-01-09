import { useEffect, useState } from "react";

function Index() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setResponse("AI Response loaded using useEffect");
    }, 1500);
  }, []);

  return (
    <div>
      <h2>Day 5 – useEffect + AI</h2>
      <p>{response}</p>
    </div>
  );
}

export default Index;
