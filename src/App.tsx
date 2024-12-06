import "./App.css";
import president from './assets/president.png';

function App() {
  return (
    <>
      <div className="div-row-center">
        <h1 className="header-1">
          The Official Sheridan College Computer Science Club Website!
        </h1>
        <p className="p-text">Get to codin club members ;)
        </p>
        <img src={president}/>
      </div>
    </>
  );
}

export default App;
