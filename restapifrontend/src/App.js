import logo from './logo.svg';
import './App.css';
import Loadapi from './components/loadapi';
import Postapi from './components/postapi';

function App() {
  return (
    <div className="App">
      <Loadapi/>
      <Postapi/>
    </div>
  );
}

export default App;
