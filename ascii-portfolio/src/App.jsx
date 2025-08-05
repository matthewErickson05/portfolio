import './App.css';
import AsciiModel from './AsciiModel.jsx';
import TypewriterTitle from './Title.jsx';
import Navbar from './Navbar.jsx';

function App() {
  return (
    <div className='App'>
      <div className= "main-content">
        <Navbar />
          <div>
            <TypewriterTitle />
            <div style={{
              fontFamily: 'Poppins, Sans Serif',
              fontSize: '2rem',
              paddingLeft: "20px",
              color: "white",
              position: 'relative',
            }}>
            Georgia Tech
            </div>
          </div>
        <AsciiModel />
      </div>

    </div>
  )
}

export default App;