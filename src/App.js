import './App.css';
import Header from './Components/Header/Header.js'
import TinderCards from './Components/TinderCards/TinderCards.js'
import SwipeButtons from './Components/SwipeButtons/SwipeButtons.js'

function App() {
  return (
    <div className="app">
      <Header/>
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
