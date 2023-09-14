import './App.css';
import NetflixPage from './components/NetflixPage';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <NetflixPage />
      </Provider>
    </div>
  );
}

export default App;
