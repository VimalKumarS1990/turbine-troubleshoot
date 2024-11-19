import React, { useEffect, useState } from 'react';
import './SideBar.css';
import { MdOutlineChat } from 'react-icons/md';
import { BiMenuAltLeft } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { CiLight } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { IoMdOpen } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineStop } from 'react-icons/ai';
import { toast } from 'react-toastify';
const SideBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [storageHistoryData, setStorageHistoryData] = useState([]);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const featureNotAvailable = () => {
    toast.error('This feature is currently not available!');
  };

  const handleClearHistory = () => {
    localStorage.removeItem('chatHistory');
    setStorageHistoryData([]);
    toast.success('Chat History Cleared!');
  };

  const newChat = () => {
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory'));
    if (chatHistory === null) {
      chatHistory = [];
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
    let currentChatData = JSON.parse(localStorage.getItem('chatData'));

    if (chatHistory.length <= 2) {
      chatHistory.unshift({ chat: currentChatData });
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    } else {
      chatHistory.pop();
      chatHistory.unshift({ chat: currentChatData });
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
    toast.success('Conversation Saved!');
    localStorage.removeItem('chatData');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  useEffect(() => {
    const storedChatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    setStorageHistoryData(storedChatHistory);
  }, []);

  return (
    <>
      <nav
        className={`sidebar bg-light ${isNavVisible ? 'd-flex' : 'd-none'} d-lg-flex`}
        style={{
          position: isNavVisible ? 'absolute' : 'relative',
          height: isNavVisible ? '85%' : 'auto'
        }}>
        <div className="section1">
          <button
            className="btn btn-dark mb-4"
            style={{ fontSize: '0.9em', borderRadius: '50px' }}
            onClick={newChat}>
            New Chat
          </button>
          <div className="chat d-flex align-items-center p-1">
            <ul className="p-0">
              {storageHistoryData.length > 0 ? (
                storageHistoryData.map((item, index) => (
                  <li key={index} className="p-1" onClick={featureNotAvailable}>
                    <span>
                      <MdOutlineChat />
                    </span>
                    <span className="ml-1">
                      <p
                        style={{
                          fontWeight: '500',
                          margin: 0
                        }}>
                        {item.chat[0].chatId}
                      </p>
                    </span>
                  </li>
                ))
              ) : (
                <li className="p-1">
                  <span>
                    <AiOutlineStop />
                  </span>
                  <span className="ml-1">
                    <p
                      style={{
                        fontWeight: '500',
                        margin: 0
                      }}>
                      No Chat History
                    </p>
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="section2">
          <hr />
          <ul className="p-2">
            <li
              style={{ paddingTop: 0 }}
              onClick={() => storageHistoryData.length > 0 && handleClearHistory()}>
              <span className="ml-2">
                <RiDeleteBin5Line />
              </span>
              <span>
                <p>Clear History</p>
              </span>
            </li>
            <li onClick={featureNotAvailable}>
              <span className="ml-2">
                <CiLight />
              </span>
              <span>
                <p>Light Mode</p>
              </span>
            </li>
            <li onClick={featureNotAvailable}>
              <span className="ml-2">
                <IoPersonOutline />
              </span>
              <span>
                <p>My Profile</p>
              </span>
            </li>
            <li onClick={featureNotAvailable}>
              <span className="ml-2">
                <IoMdOpen />
              </span>
              <span>
                <p>Help/FAQ</p>
              </span>
            </li>
            <li onClick={featureNotAvailable}>
              <span className="ml-2">
                <FiLogOut />
              </span>
              <span>
                <p>Log out</p>
              </span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile View */}
      <button
        type="button"
        onClick={toggleNav}
        className="btn p-0 d-block d-lg-none"
        style={{
          maxHeight: '50px',
          fontSize: '2em',
          background: 'none',
          border: 'none',
          zIndex: '1001',
          marginLeft: '10px',
          outline: 'none'
        }}
        aria-label="Toggle menu">
        <BiMenuAltLeft />
      </button>
    </>
  );
};

export default SideBar;
