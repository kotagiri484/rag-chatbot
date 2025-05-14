
import React from "react";

const ChatbotHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-start w-full">
      <div className="w-[180px] h-[160px] flex justify-end items-center pl-[7px] pt-[35px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f79dc980785195fd3166013cad9c1586b951369"
          alt="Pi DataCenters Logo"
          className="w-[170px] h-[120px]"
        />
      </div>
      <div className="w-[220px] h-[220px] flex justify-center items-center pl-[20px] pr-[20px] pt-[50px] pb-[80px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/70ca9ac2c207467b41d72b8101cb4d14fa04ed15"
          alt="Google Gemini Logo"
          className="w-[190px] h-[100px]"
        />
      </div>
    </div>
  );
};

export default ChatbotHeader;
