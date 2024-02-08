import "./App.css";
import FirstPage from "./Components/FirstPage";
import PageHeader from "./Components/PageHeader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageHeader />
        <FirstPage />
      </header>
    </div>
  );
}

export default App;
