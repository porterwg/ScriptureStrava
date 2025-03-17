import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import UnjoinedGroup from './Group'; // Assuming this is one of your views


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Group" element={<UnjoinedGroup />} />
      </Routes>
    </Router>
  );
}

export default App;

