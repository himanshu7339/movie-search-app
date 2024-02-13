import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import Layout from "./components/layout/Layout";
import {TopRated} from "./components/pages/TopRated";
import { SearchingMovie } from "./components/pages/SearchingMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<TopRated />} />
          <Route path="/searching" element={<SearchingMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
