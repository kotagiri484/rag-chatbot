
import React, { useState } from "react";

const ChatbotInput: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      // Process the question here
      console.log("Question submitted:", question);
      // Reset the input field
      setQuestion("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 px-[42px]">
      <div className="w-full max-w-[1100px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Type your question here....."
            className="w-full h-[55px] bg-white text-[20px] font-light text-[rgba(163,168,184,0.97)] px-[25px] rounded-[15px] border-2 border-[rgba(163,168,184,0.50)]"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            aria-label="Question input"
          />
        </div>
      </div>
      <div className="mt-8">
        <button 
          type="submit"
          className="w-[120px] h-[45px] bg-white text-[20px] font-light text-[rgba(0,0,0,0.73)] rounded-[12px] border-2 border-[rgba(0,0,0,0.55)] hover:bg-gray-50 transition-colors focus:bg-gray-200 focus:border-black active:bg-gray-300 active:border-black"
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
