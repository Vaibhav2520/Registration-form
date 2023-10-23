import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListView from "./components/listView";
import Register from "./components/register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          {/* <Route index element={<Home />} /> */}
          <Route path="register" element={<Register />} />
          <Route path="listView" element={<ListView/>} />
         
      
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
