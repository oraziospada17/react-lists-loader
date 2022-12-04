import './App.css';
import { List } from './components/List';
import { AppProvider } from './context/ctx';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <List />
      </div>
    </AppProvider>
  );
}

export default App;
