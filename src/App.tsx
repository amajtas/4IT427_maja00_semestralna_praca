import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Moja zbierka receptov</h1>
          <hr className="app-divider" />
        </header>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App
