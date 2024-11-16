import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import brandLogo from "../src/assets/images/brandLogo.png";
import ChatSpace from "./components/ChatSpace/ChatSpace";
import UserInputBox from "./components/UserInputBox/UserInputBox";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

function App() {
  const [userInput, setUserInput] = useState([]);
  const popup = toast;
  const botUser = "John Doe";

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
          <div className="col">
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
            <ChatSpace userInput={userInput} />
            <UserInputBox
              botUser={botUser}
              setUserInput={setUserInput}
              userInput={userInput}
              toast={popup}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
