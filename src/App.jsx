import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TransportContract from "./TransportContract/TransportContract";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* إعادة توجيه الصفحة الرئيسية إلى الرحلة رقم 22 */}
          <Route path="/" element={<Navigate to="/trips/22" replace />} />

          {/* باقي الرحلات باستخدام id */}
          <Route path="/trips/:id" element={<TransportContract />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
