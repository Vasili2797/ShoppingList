import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageHeader from "./Components/PageHeader";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageHeader />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
