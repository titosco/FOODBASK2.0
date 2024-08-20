import './App.css';
import Navigation from './Navigation';
import Main from './Main';

function App() {
  return (
    <div className="App text-gray-600 font-body grid md:grid-cols-3">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
