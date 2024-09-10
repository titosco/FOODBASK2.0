import './App.css';
import Navigation from './Navigation';
import Main from './Main';
import Contact from './Contact';

function App() {
  return (
    <div className="App text-gray-600 font-body grid md:grid-cols-3">
      <Navigation />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
