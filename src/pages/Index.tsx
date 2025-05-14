import React from "react";
import { 
  ChatbotHeader, 
  ChatbotWelcome, 
  ChatbotInput, 
  ChatbotFooter 
} from "@/components/chatbot";

const Index: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[linear-gradient(118deg,#EAEBFB_0.52%,#C5EEF5_38.86%,#A4F0EF_100.21%)] flex flex-col p-6">
      <ChatbotHeader />
      <ChatbotWelcome />
      <ChatbotInput />
      <ChatbotFooter />
    </main>
  );
};

export default Index;
