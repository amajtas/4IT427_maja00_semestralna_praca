import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

function App() {

  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Moja zbierka receptov</h1>
        <hr />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App
