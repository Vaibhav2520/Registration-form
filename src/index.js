import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./components/detailView";
import ListView from "./components/listView";
import Register from "./components/register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="" element={<ListView />} />
        <Route exact path="detailView/:id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
