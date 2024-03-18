import React, { useContext } from "react";
import "./Main.css";
import { images } from "../../assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <img src={images.gemini_icon} alt="" />
        <p>Gemini AI</p>
        <img src={images.hero_image} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={images.compass_item} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept : urban plannig</p>
                <img src={images.light_item} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={images.message_item} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={images.code_item} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img
                src={images.hero_image}
                style={{ width: 60, height: 60, borderRadius: 50 }}
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={images.gemini_icon} width={50} height={50} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a promt here"
            />
            <div>
              <img src={images.addGalleryItem} alt="" />
              <img src={images.microphone_item} alt="" />
              {input && (
                <img onClick={() => onSent()} src={images.send_item} alt="" />
              )}
            </div>
          </div>
          <p className="bottom-info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            similique sint corrupti mollitia id a doloribus nihil reprehenderit
            nam pariatur! Necessitatibus officia illum quaerat quia, asperiores
            corporis vero commodi fugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
