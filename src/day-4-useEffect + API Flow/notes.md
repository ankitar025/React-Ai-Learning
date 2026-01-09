1️⃣ What is useEffect? 

useEffect is used when something needs to happen after the screen loads or updates.

Think like this:

“React, please do this work after rendering the UI.”

Examples:

Fetch data from API
Call AI service
Update title
Listen to events

==================================================

2️⃣ Why Do We Need useEffect?

Without useEffect:
❌ API calls run again and again
❌ Infinite loops
❌ Bad performance

With useEffect:
✅ Controlled execution
✅ Clean logic
✅ Optimized apps

===============================================

3️⃣ useEffect Syntax (Easy)
useEffect(() => {
  // side effect work
}, []);
👉 [] means run only once (on page load)

📌 What’s happening here?

Component loads
useEffect runs once
Simulated AI response updates state
UI updates automatically

============================================

4️⃣ API Flow (Interview GOLD)
Component Render
↓
useEffect triggered
↓
API request sent
↓
Response received
↓
State updated
↓
UI updated

==========================================


5️⃣ Day 5 Practical Example (Mock AI API)
🔹 App.js
import { useEffect, useState } from "react";

function App() {
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

======================================

6️⃣ API Flow (Interview GOLD)
Component Render
↓
useEffect triggered
↓
API request sent
↓
Response received
↓
State updated
↓
UI updated


Say this in interviews 👆

==========================================

7️⃣ Common useEffect Dependency Cases
Dependency	Meaning
[]	Run once
[prompt]	Run when prompt changes
No array	Run every render (❌ avoid)

======================================================

8️⃣ Interview Questions & Answers (Day 5)

❓ Why use useEffect?
👉 To handle side effects like API calls after render.

❓ Difference between useEffect & normal function?
👉 Normal function runs on render; useEffect runs after render.

❓ Can we call API inside render?
❌ No. Causes infinite loops.

===========================================================

Day 4 – useEffect

- useEffect handles side effects
- Commonly used for API calls
- Dependency array controls execution
- Important for performance and clean code

