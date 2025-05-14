import React from "react";

const ChatbotWelcome: React.FC = () => {
  return (
    <section className="flex flex-col gap-[18px] mt-10 px-[35px]">
      <h1 className="text-[40px] font-bold text-black">RAG Chatbot</h1>
      <h2 className="text-[32px] font-semibold text-black">
        Intelligent Assistance by Pi DataCenters Powered by Google Gemini
      </h2>
      <p className="text-[32px] font-semibold text-black">
        Welcome! How can I assist you today?
      </p>
    </section>
  );
};

export default ChatbotWelcome;
