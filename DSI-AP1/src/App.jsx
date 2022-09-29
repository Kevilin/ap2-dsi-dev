import AppBar from "./components/Appbar";
import Home from "./pages/Home";
import { AppContainer } from "./styles";
import "./App.css";

function App() {
  return (
    <AppContainer>
      <AppBar />
      <Home />
    </AppContainer>
  );
}

export default App;
