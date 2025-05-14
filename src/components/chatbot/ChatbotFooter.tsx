import React from "react";

const ChatbotFooter: React.FC = () => {
  return (
    <footer className="flex items-center gap-[13px] mt-auto pt-10 px-[42px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/de7e61bce220685368e77e57480e78ce429076d6"
        alt="Copyright symbol"
        className="w-[50px] h-[50px]"
      />
      <p className="text-[32px] font-semibold text-black">
        2025 Pi DataCenters. Powered by Google Gemini
      </p>
    </footer>
  );
};

export default ChatbotFooter;
