import logo from './loto.svg'
import './App.css';

import Testimonial from './components/Testimonial'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Insert your testimonial HERE
        </h1>
        <a
          className="App-link"
          href='#Testimonial'
        >
          Testimonial
        </a>
      </header>

      <div className='main'id='Testimonial' >
        
          <h1>
            This is what our <span>HAPPY</span> clients think about our services
          </h1>
        
        {/* this is a component */}
        <Testimonial />
      </div>

    </div>
    
  );
}

export default App
