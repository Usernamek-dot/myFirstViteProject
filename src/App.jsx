import reactLogo from "./assets/react.svg";
import "./styles/App.css";
import { Textarea } from "./Textarea";

function App() {
  return (
    <div className="App">
      <div>
        <a href="#" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </a>
      </div>
      <Textarea />

      <p>Created by DarvCode white 💙 Usernamek-dot</p>
    </div>
  );
}

export default App;
