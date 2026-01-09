🔹 PART 1: SIMPLE LEVEL (Must-Do)
1️⃣ What is Fetch API? (Human Language)

fetch() is how we ask a server for data.

Example in real life:
You ask Google a question → Google replies → You read it

Same in React:
React asks API → API responds → UI shows data

==========================================

2️⃣ Why Fetch is Important (Interview Answer)

Used to get data from backend or AI services
Works with REST APIs
Core skill for frontend developers

=============================================

📌 What you learned here

fetch runs inside useEffect
data saved in state
UI updates automatically

=================================================

🔹 PART 2: SLIGHTLY ADVANCED (Very Important)
4️⃣ Loading & Error Handling

Real apps must handle:
✔ Loading
✔ Error
✔ Success

📌 Interview Gold Line
“I always manage loading, error, and success states when calling APIs.”

🔹 PART 3: AI FLOW (Concept – Interview Ready)
How AI API Fits Here
User Input
↓
fetch() call
↓
AI processes input
↓
response received
↓
setState()
↓
UI updates

=============================================================

Day 6 – Fetch API

- fetch() is used to call APIs
- API calls go inside useEffect
- Always handle loading and error states
- Same flow works for AI APIs

=========================================

🧠 INTERVIEW QUESTIONS (Day 6)

Q: Why fetch inside useEffect?
👉 To avoid repeated API calls on every render.

Q: How do you handle errors in API calls?
👉 Using try/catch or .catch() and error state.

Q: What are loading states?
👉 UI indicators while waiting for API response.