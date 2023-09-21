import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";
import { TestePage } from "./pages/TestePage.js/TestePage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teste" element={<TestePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
