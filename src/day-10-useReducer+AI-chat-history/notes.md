WHY do we even need useReducer?

You already know useState, right?

const [count, setCount] = useState(0);

useState is perfect when:

Only 1–2 values
Simple updates

But imagine this 👇
You are building an AI Chat App:

Messages array
Loading status
Error message
Clear chat
Add new message
Remove message

Using useState for everything becomes messy and confusing 😵‍💫

👉 That’s why useReducer exists

🧠 Simple Meaning of useReducer

useReducer is like a manager that controls how state changes.

Instead of saying:

“Change state directly”

You say:

“Hey reducer, this action happened—decide what to do.”

🧩 useReducer has ONLY 3 important parts
1️⃣ State (current data)
2️⃣ Action (what happened)
3️⃣ Reducer (logic that decides new state)

That’s it. No magic ✨

===============================================

🧱 Step 1: Think of State as ONE Object

Instead of this ❌:

useState()
useState()
useState()

We do this ✅:

const initialState = {
  messages: [],
  loading: false,
  error: null,
};


🧱 Step 2: Reducer Function (MOST IMPORTANT)

👉 Reducer is just a normal JS function

🧠 Read this:

If action is SEND_MESSAGE → show loading
If action is RECEIVE_MESSAGE → save AI reply
If action is ERROR → show error

Reducer never updates state directly
It always returns a new state


🧱 Step 3: Use useReducer in Component
import { useReducer } from "react";

const [state, dispatch] = useReducer(chatReducer, initialState);

Meaning :
state → current data
dispatch → function to send actions

🧪 Step 4: Dispatch Actions

When user sends prompt:
dispatch({ type: "SEND_MESSAGE" });

When AI responds:
dispatch({
  type: "RECEIVE_MESSAGE",
  payload: { role: "ai", text: "Hello from AI 🤖" },
});

If error:
dispatch({
  type: "ERROR",
  payload: "Something went wrong",
});

🧠 Important Rule (REMEMBER THIS)

❌ You do NOT change state directly
✅ You ONLY dispatch actions

Think like this:

“I don’t touch state. I report events.”

==============================================

🔥 When to Use useReducer (Interview Answer)

Say this confidently 👇

I use useReducer when state logic is complex, involves multiple actions, or when the next state depends on the previous state—like chat history, forms, or AI workflows.