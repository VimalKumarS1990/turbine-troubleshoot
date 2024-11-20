import React, { useState } from 'react';
import './ChatBody.css';
import { RiRobot3Line } from 'react-icons/ri';
import TypingEffect from '../Reusable/TypingEffect';
import ScrollToBottom from '../Reusable/ScrollToBottom/ScrollToBottom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ChatBody = ({ chatData, botUser }) => {
  localStorage.setItem('chatData', JSON.stringify(chatData));

  const totalCharacters = chatData.reduce((sum, obj) => {
    const characterCount = obj.content.length;
    return sum + characterCount;
  }, 0);

  const [gptResDone, setGptResDone] = useState(false);

  return (
    <div id="parent" className="col chat-container">
      {chatData?.map((item, index) =>
        item.role && item.content ? (
          <div
            key={index}
            className="row pb-3"
            style={{
              textAlign: item.role === botUser ? 'end' : 'left'
            }}>
            <div>
              {totalCharacters > 200 && <ScrollToBottom section="parent" />}
              <span className={item.role === botUser ? 'botUser' : ''}>
                <span>
                  {item.role === botUser ? (
                    <span>&nbsp;&nbsp;{item.content}&nbsp;&nbsp;</span>
                  ) : (
                    <>
                      <span className="d-flex">
                        <RiRobot3Line style={{ fontSize: '1.5em' }} />
                        <TypingEffect
                          text={item.content}
                          typingSpeed={50}
                          setGptResDone={setGptResDone}
                        />
                      </span>
                      {item.images && gptResDone && (
                        <div className="d-flex">
                          {item.images.map((e, index) => (
                            <PhotoProvider key={index}>
                              <PhotoView src={e.url}>
                                <div
                                  style={{
                                    margin: '10px',
                                    cursor: 'pointer',
                                    textAlign: 'center'
                                  }}>
                                  <img
                                    src={e.url}
                                    alt={e.title}
                                    style={{ width: '100px', height: 'auto' }}
                                  />
                                  <p
                                    style={{
                                      color: 'GrayText',
                                      fontSize: '0.7em',
                                      fontWeight: '600'
                                    }}>
                                    {e.title}
                                  </p>
                                </div>
                              </PhotoView>
                            </PhotoProvider>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </span>
              </span>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default ChatBody;
