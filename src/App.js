import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import PhoneDetails from "./components/PhoneDetails";
import PhoneList from "./components/PhoneList";

function App() {
  return (
    <div className="App">
      <PhoneList />

      <Routes>
        <Route path="/phones/:phoneId" element={<PhoneDetails />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
