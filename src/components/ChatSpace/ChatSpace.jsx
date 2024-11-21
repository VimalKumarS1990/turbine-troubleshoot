import React from 'react';
import './ChatSpace.css';
import WrkLog from '../../../src/assets/images/WrkLog.png';

import ChatBody from '../ChatBody/ChatBody';
const ChatSpace = ({
  chatData,
  botUser,
  showFaq,
  setShowFaq,
  showProfile,
  setShowProfile,
  showWrkLog,
  setShowWrkLog
}) => {
  const handleBacktoChat = () => {
    setShowFaq(false);
    setShowProfile(false);
    setShowWrkLog(false);
  };
  return (
    <section className="chat-space card mx-1">
      {showWrkLog && (
        <div className="container">
          <div className="card-body">
            <h1>This is Work Log Page</h1>
            <p>
              This page contains the data about Work History of the SCADA code at this facility{' '}
              <br />
              Also, the recent work orders in this facility in collapsible table format as shown
              below
            </p>
            <div>
              <img src={WrkLog} alt="wrk-log" />
            </div>
            <p className="mt-4">
              It will be having the information about the parts needed for repairs too!
            </p>
            <button
              className="text-white mt-2"
              style={{ borderRadius: '50px', backgroundColor: 'rgb(8 107 139)', border: 'none' }}
              onClick={handleBacktoChat}>
              <span className="p-2">Back to Chat</span>
            </button>
          </div>
        </div>
      )}
      {showFaq && (
        <div className="container">
          <div className="card-body">
            <h1>Help/FAQ</h1>
            <p>This page will be containing FAQ and other Help informations.</p>
            <button
              className="text-white mt-4"
              style={{ borderRadius: '50px', backgroundColor: 'rgb(8 107 139)', border: 'none' }}
              onClick={handleBacktoChat}>
              <span className="p-2">Back to Chat</span>
            </button>
          </div>
        </div>
      )}
      {showProfile && (
        <div className="container">
          <div className="card-body">
            <h1>My Profile</h1>
            <p>This page will be containing logged in user informations.</p>
            <button
              className="text-white mt-4"
              style={{ borderRadius: '50px', backgroundColor: 'rgb(8 107 139)', border: 'none' }}
              onClick={handleBacktoChat}>
              <span className="p-2">Back to Chat</span>
            </button>
          </div>
        </div>
      )}

      {showFaq === false && showProfile === false && showWrkLog === false && (
        <div className="card-body d-flex" style={{ padding: '5px' }}>
          <ChatBody chatData={chatData} botUser={botUser} />
        </div>
      )}
    </section>
  );
};

export default ChatSpace;
