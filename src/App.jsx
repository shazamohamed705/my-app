import { BrowserRouter, Routes, Route } from "react-router-dom"; // <-- هنا الاستيراد
import TransportContract from "./TransportContract/TransportContract";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* الصفحة الرئيسية تفتح رحلة 22 مباشرة */}
          <Route path="/" element={<TransportContract defaultId="22" />} />

          {/* باقي الرحلات باستخدام id */}
          <Route path="/trips/:id" element={<TransportContract />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;