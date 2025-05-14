
import React from "react";
import "../../styles/main.css";

const ChatbotWelcome = () => {
  return (
    <section className="welcome-section">
      <h1 className="welcome-heading">RAG Chatbot</h1>
      <h2 className="welcome-subheading">
        Intelligent Assistance by Pi DataCenters Powered by Google Gemini
      </h2>
      <p className="welcome-text">
        Welcome! How can I assist you today?
      </p>
    </section>
  );
};

export default ChatbotWelcome;
