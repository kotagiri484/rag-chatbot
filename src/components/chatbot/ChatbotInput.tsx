import React, { useState } from "react";

const ChatbotInput: React.FC = () => {
  const [question, setQuestion] = useState("");

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
    <form onSubmit={handleSubmit} className="mt-10 px-[42px]">
      <div className="w-full max-w-[1334px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Type your question here....."
            className="w-full h-[70px] bg-white text-[25px] font-light text-[rgba(163,168,184,0.97)] px-[29px] rounded-[20px] border-2 border-[rgba(163,168,184,0.50)]"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            aria-label="Question input"
          />
        </div>
      </div>
      <div className="mt-12">
        <button 
          type="submit"
          className="w-[154px] h-[59px] bg-white text-[25px] font-light text-[rgba(0,0,0,0.73)] rounded-[15px] border-2 border-[rgba(0,0,0,0.55)] hover:bg-gray-50 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ChatbotInput;
