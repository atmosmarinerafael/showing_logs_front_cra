import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
