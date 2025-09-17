import "./App.css";
import "./styles/Login.css";
import "./styles/Navbar.css";
import Navbar from "./components/model/navbar";
import MainRoutes from "./components/routes/main.routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
