import React from 'react';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import FirstRow from './Components/FirstRow';
import SecondRow from './Components/SecondRow';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <br/>
      <div className='container mt-5'>
        <FirstRow />
        <SecondRow />

        
        
      </div>
      <Footer />

      
    </div>
  );
}

export default App;
