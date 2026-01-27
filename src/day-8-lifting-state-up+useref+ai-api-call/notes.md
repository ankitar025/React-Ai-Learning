Lifting State Up + useRef (Focus UX)
1️⃣ What is Lifting State Up? (Human language)

👉 Problem:
Sometimes two or more child components need the same data.

👉 Wrong approach:
Each child keeps its own state → data becomes out of sync.

👉 Correct approach (Lifting State Up):
Move the state to their nearest common parent
and pass data + functions down via props.

📌 In short:

When siblings need shared data → keep state in parent.

2️⃣ Why is Lifting State Up important?

Single source of truth
Predictable data flow
Cleaner logic
Very common interview question
Used in forms, filters, chat apps, AI prompts

=======================================================

3️⃣ What is useRef? (Simple words)

useRef lets you:

Access a DOM element directly
Store a value without re-rendering
Improve UX (focus, scroll, input control)

📌 Most common real use:
👉 Auto-focus input field

================================================

4️⃣ Real-world combined example
🎯 Scenario: AI Prompt Input + Preview

Input component → user types prompt
Preview component → shows live prompt
Button → focuses input using useRef

====================================================

Interview-ready explanation (1 line)

Lifting State Up is used when multiple components need to share the same state, so the state is moved to their common parent and passed down via props.

useRef is used to directly access DOM elements or store mutable values without causing re-renders