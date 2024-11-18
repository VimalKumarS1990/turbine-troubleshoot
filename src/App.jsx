import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import brandLogo from "../src/assets/images/brandLogo.png";
import ChatSpace from "./components/ChatSpace/ChatSpace";
import UserInputBox from "./components/UserInputBox/UserInputBox";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import DropDowns from "./components/DropDowns/DropDowns";

function App() {
  const popup = toast;
  const botSystem = "gpt";
  const botUser = "user";

  const facilityList = [
    { facilityCode: "001", facilityName: "Facility 1" },
    { facilityCode: "002", facilityName: "Facility 2" },
    { facilityCode: "003", facilityName: "Facility 3" },
  ];
  const turbineList = [
    { turbineCode: "001", turbineName: "Turbine 1" },
    { turbineCode: "002", turbineName: "Turbine 2" },
    { turbineCode: "003", turbineName: "Turbine 3" },
  ];

  const generateChatId = () => `chat-${Date.now()}`;

  const [facility, setFacility] = useState(null);
  const [turbine, setTurbine] = useState(null);

  const [chatData, setChatData] = useState([
    {
      chatId: generateChatId(),
      role: botSystem,
      timestamp: new Date().toLocaleString(),
      content:
        "Hello User! Welcome to WindTurbine Troubleshooter! \nI'm your assistant. Please select a Facility and Turbine above to start the conversation.",
    },
  ]);

  return (
    <div className="App container-fluid p-1">
      <header className="row m-1">
        <div className="m-auto header header-bg img-fluid">
          <a
            href="/"
            className="p-2 ml-2 navbar-brand d-flex  align-items-center justify-content-center"
          >
            <img src={brandLogo} alt="brand-logo" height="50" loading="lazy" />
            <p
              style={{
                fontWeight: "600",
                textShadow: "2px 2px 2px white",
                margin: "0",
                textAlign: "center",
              }}
            >
              Enbridge
            </p>
          </a>
          <div className="header-text">
            <p className="heading m-auto">WindTurbine Troubleshooter</p>
          </div>
        </div>
      </header>
      <div className="container-fluid p-1">
        <div className="d-flex">
          <SideBar />
          <div className="col pl-0">
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
            <DropDowns
              facilityList={facilityList}
              turbineList={turbineList}
              facility={facility}
              turbine={turbine}
              setFacility={setFacility}
              setTurbine={setTurbine}
            />
            <ChatSpace chatData={chatData} botUser={botUser} />
            <UserInputBox
              botUser={botUser}
              setChatData={setChatData}
              chatData={chatData}
              toast={popup}
              facility={facility}
              turbine={turbine}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
