// Update App.js to include the new routes
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import UnjoinedGroup from './Group';
import GroupsList from './groups';
import PostsPage from './posts';
import ProfilePage from './profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Group" element={<UnjoinedGroup />} />
        <Route path="/groups" element={<GroupsList />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;

