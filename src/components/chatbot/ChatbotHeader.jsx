
import React from "react";
import "../../styles/main.css";

const ChatbotHeader = () => {
  return (
    <div className="header-container">
      <div className="pi-logo-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f79dc980785195fd3166013cad9c1586b951369"
          alt="Pi DataCenters Logo"
          className="pi-logo"
        />
      </div>
      <div className="gemini-logo-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/70ca9ac2c207467b41d72b8101cb4d14fa04ed15"
          alt="Google Gemini Logo"
          className="gemini-logo"
        />
      </div>
    </div>
  );
};

export default ChatbotHeader;
