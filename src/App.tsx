import BESalaryImage from './besalary.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={BESalaryImage} alt="logo" />
        <p>
          BeSalary stuff will appear soon...
        </p>
        <a
          className="App-link"
          href="https://www.reddit.com/r/BESalary/"
          target="_blank"
          rel="noopener noreferrer"
        >
          /r/BESalary
        </a>
      </header>
    </div>
  );
}

export default App;
