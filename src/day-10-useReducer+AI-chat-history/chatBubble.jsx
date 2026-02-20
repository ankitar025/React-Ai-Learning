import React from "react";

const ChatBubble = ({ role, content }) => {
  const parts = content.split(/```/);

  return (
    <div className={`bubble ${role}`}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <pre key={i}>
            <code>{part.replace(/^jsx|^js/, "")}</code>
          </pre>
        ) : (
          <p key={i}>{part}</p>
        )
      )}
    </div>
  );
};

export default ChatBubble;
