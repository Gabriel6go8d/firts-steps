import React, {useState} from 'react';
import MyNavbar from './Components/MyNavbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Content from './Components/Content'

function App() {
  const [active, setActive] = useState(1)
  const [view, setView] = useState(<Content/>)
  const ChangeView = (prop) => {
    document.getElementById('showArea').classList.add('showAreaHide')
    setTimeout(()=>{
      if(prop === 'home'){
        setView(<Content/>)
        setActive(1)
      }else if(prop === 'about'){
        setView(<About/>)
        setActive(2)
      }
      
      document.getElementById('showArea').classList.remove('showAreaHide')
    }, 400) 
  }

  return (
    <div className="App">
      <div className='allContent'>
        <MyNavbar action={ChangeView} active={active}/>
        
        <div className='showArea' id='showArea'>
            {view}
        </div>

        <Footer />   
      </div>   
    </div>
  );
}

export default App;
