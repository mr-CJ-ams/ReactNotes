import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {Contact} from './pages/Contact';
import { Navbar } from './Navbar';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [username, setUserName] = useState("Carlo");
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUserName}}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/profile" 
              element={<Profile  />} 
            />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={ <h1>Page not found</h1> } />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

