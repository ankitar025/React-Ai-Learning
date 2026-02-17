import { useContext } from "react";
import { AISettingsContext } from "../Context/AISettingsContext";

function LanguageSelector() {
  const { language, tone, setLanguage, setTone } =
    useContext(AISettingsContext);

  return (
    <div >
      <select className="mr-4 border-2 p-1" value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option>English</option>
        <option>Hindi</option>
      </select>

      <select className="mr-4 border-2 p-1" value={tone} onChange={(e) => setTone(e.target.value)}>
        <option>Friendly</option>
        <option>Formal</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
