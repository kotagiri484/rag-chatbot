import React from "react";

const ChatbotHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-start w-full">
      <div className="w-[227px] h-[200px] flex justify-end items-center pl-[7px] pt-[45px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f79dc980785195fd3166013cad9c1586b951369"
          alt="Pi DataCenters Logo"
          className="w-[220px] h-[155px]"
        />
      </div>
      <div className="w-[300px] h-[300px] flex justify-center items-center pl-[28.804px] pr-[29.348px] pt-[69.027px] pb-[105.531px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/70ca9ac2c207467b41d72b8101cb4d14fa04ed15"
          alt="Google Gemini Logo"
          className="w-[242px] h-[125px]"
        />
      </div>
    </div>
  );
};

export default ChatbotHeader;
