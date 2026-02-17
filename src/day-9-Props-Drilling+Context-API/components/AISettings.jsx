import { useContext } from "react"
import { AIContext } from "../Context/AISettingsContext"

function AISettings() {

 const{model, setModel, temperature, setTemperature} = useContext(AIContext)



return (
    <div style={{ marginBottom: "20px" }}>
      <h4>AI Settings</h4>

      <select value={model} onChange={(e) => setModel(e.target.value)}>
        <option value="gpt-3.5">GPT 3.5</option>
        <option value="gpt-4">GPT 4</option>
      </select>

      <br />

      <label>
        Temperature:
        <input
          type="number"
          step="0.1"
          min="0"
          max="1"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
      </label>
    </div>
  );
}

export default AISettings;