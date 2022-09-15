import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router  from "./router/Router";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
