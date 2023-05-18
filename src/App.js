import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import MovieCard from "./Components/MovieCard";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Header />
        <Routes>
        <Route element={< />} path="/" />

        </Routes>
      </BrowserRouter> */}
      <Header />
      <MovieCard />

    </div>
  );
}

export default App;
