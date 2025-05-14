
import React, { useState } from "react";
import "../../styles/main.css";

const ChatbotInput = () => {
  const [question, setQuestion] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      // Process the question here
      console.log("Question submitted:", question);
      // Reset the input field
      setQuestion("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="input-container">
        <div className="relative">
          <input
            type="text"
            placeholder="Type your question here....."
            className="question-input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            aria-label="Question input"
          />
        </div>
      </div>
      <div className="button-container">
        <button 
          type="submit"
          className="submit-button"
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
          onMouseLeave={() => isActive && setIsActive(false)}
          style={{ 
            borderColor: isActive ? 'black' : 'rgba(0,0,0,0.55)',
            borderWidth: isActive ? '2px' : '2px'
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ChatbotInput;
