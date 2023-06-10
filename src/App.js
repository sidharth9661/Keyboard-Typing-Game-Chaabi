import './CSS/custom.css'
import './App.css';
import ShowWords from './Components/ShowWords';
import wire from './images/wire.png';

function App() {
  return (
    <div className="App">
      <h1>Touch Typing Test - React App</h1>
      <ShowWords/>
      <img src={wire} className='wire' alt="typingtest.com logo"/>
    </div>
  );
}

export default App;
