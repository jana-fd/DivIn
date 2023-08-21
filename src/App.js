import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import ExplorePage from './components/ExplorePage';
import Homepage from './components/Homepage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/explore" element = {<ExplorePage/>} />
      </Routes>
    </Router>
    
  );
};


export default App;
