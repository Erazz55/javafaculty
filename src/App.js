import './App.css';
import bg from './assets/images/bg.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ 
          backgroundAttachment: 'cover',
          backgroundPosition: 'cover', 
          width: '100%',
          height: '100vh', backgroundColor:'black'}}>
            
            <img style={{ 
          backgroundAttachment: 'cover',
          backgroundPosition: 'cover', 
          height: '75vh'}} src={bg}/>
          {/* <p>Register Now</p> */}
          <div>
              <button style={{ textAlign: 'center',
                               backgroundColor: "#bf2f24",
                               width: '30%', height: '2.5rem', 
                               borderRadius: '16px',
                               fontSize: '1.8rem'
                                  
                                }}><a style={{color: 'white', textDecoration: 'none'}} href="https://docs.google.com/forms/d/e/1FAIpQLScy0MHqzd3aEa5Ywc3Hf2WVvIZ8oWQvyDOM5ATzD0BibBg8EA/viewform?usp=sf_link">Click Here To Register</a></button>
                
          </div>
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
