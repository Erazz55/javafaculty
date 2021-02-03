import './App.css';
import bg from './assets/images/bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ 
          width: '100%',
          height: '100vh', backgroundColor:'black'}}>
            
            <img style={{ 
          backgroundAttachment: 'cover',
          backgroundPosition: 'cover', 
          height: '20em', width: '80%'}} src={bg}/>
          
          <div>
              <Button style={{width: '30%'}} variant='danger'><a style={{color: 'white', textDecoration: 'none'}} href="https://docs.google.com/forms/d/e/1FAIpQLScy0MHqzd3aEa5Ywc3Hf2WVvIZ8oWQvyDOM5ATzD0BibBg8EA/viewform?usp=sf_link">Click Here To Register</a></Button>
                
          </div>
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
