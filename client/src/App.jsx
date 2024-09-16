import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About'; 
import Campaigns from './Campaigns';
import Signin from './Signin';
import Signup from './Signup';
import AddCampaigns from './AddCampaigns';
import Donate from './Donate'
import LocalDonate from './LocalDonate';
import Save from './Save';
import Blink from './Blink';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add" element={<AddCampaigns />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/local" element={<LocalDonate/>} />
        <Route path="/donation-success" element={<Save/>} />
        <Route path="/blink" element={<Blink/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
