
import React from "react";
import { 
  ChatbotHeader, 
  ChatbotWelcome, 
  ChatbotInput, 
  ChatbotFooter 
} from "../components/chatbot";
import "../styles/main.css";

const Index = () => {
  return (
    <main className="main-container">
      <ChatbotHeader />
      <ChatbotWelcome />
      <ChatbotInput />
      <ChatbotFooter />
    </main>
  );
};

export default Index;
