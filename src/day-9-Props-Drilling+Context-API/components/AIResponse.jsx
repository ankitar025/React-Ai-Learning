import { useContext } from "react";
import { AISettingsContext } from "../Context/AISettingsContext";

function AIResponse() {
  const { language, tone } = useContext(AISettingsContext);

  return (
    <p>
      AI Response will be shown in <b>{language}</b> with <b>{tone}</b> tone.
    </p>
  );
}

export default AIResponse;
