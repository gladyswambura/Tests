import React, { useState } from "react";
import Card from "components/card";
import { Link } from "react-router-dom";

const Widget = ({ icon, title, subtitle, botList, link }) => {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleBotChange = (botName) => {
    setSelectedBot(botName);
  };

  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px]">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            {link ? (
              <Link to={link}>{icon}</Link>
            ) : (
              icon
            )}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <h4 className="text-sm font-bold text-navy-700 dark:text-white">
          {subtitle}
        </h4>
        <div className="flex items-center space-x-2">
          <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
          {botList && (
            <select
              className="border border-gray-300 rounded-md p-0 dark:text-white"
              value={selectedBot}
              onChange={(e) => handleBotChange(e.target.value)}
            >
              <option value="">Select Bot</option>
              {botList.map((bot) => (
                <option key={bot.bot_name} value={bot.bot_name}>
                  {bot.bot_name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Widget;
