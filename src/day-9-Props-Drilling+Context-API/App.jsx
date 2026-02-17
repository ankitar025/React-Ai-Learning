import AIResponse from "./components/AIResponse";
import LanguageSelector from "./components/LanguageSelector";
import PromptBox from "./components/PromptBox";
import { AISettingsProvider } from "./Context/AISettingsContext";

function App() {
  return (
    <AISettingsProvider>
      <div className="text-left max-w-[50%] m-auto p-[50px]">
       <h2 className="text-4xl mb-10">AI Writing Assistant</h2>
      <LanguageSelector/>
      <PromptBox/>
      <AIResponse/>
      </div>
    </AISettingsProvider>
  );
}

export default App;
