import { createContext, useState } from "react";

export const AISettingsContext = createContext();

export function AISettingsProvider({ children }) {
  const [language, setLanguage] = useState("English");
  const [tone, setTone] = useState("Friendly");

  return (
    <AISettingsContext.Provider
      value={{ language, tone, setLanguage, setTone }}
    >
      {children}
    </AISettingsContext.Provider>
  );
}
