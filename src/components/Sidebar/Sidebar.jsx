import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { images } from "../../assets/index";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          src={images.menu_item}
          className="menu"
          alt="menu"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={images.plus_item} alt="plus" />
          {extended ? <p>new chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((prompt, index) => {
              return (
                <div
                  onClick={() => loadPrompt(prompt)}
                  className="recent-entry"
                >
                  <img src={images.message_item} alt="chat" />
                  <p>{prompt.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={images.chat_item} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={images.recent_item} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={images.setting_item} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
