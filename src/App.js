import Routes from './pages/routes'
import {BrowserRouter} from 'react-router-dom'
import TopBar from "./components/TopBar";

function App() {
  return (
          <div>
              <BrowserRouter>
                  <TopBar/>
                  <Routes/>
              </BrowserRouter>
          </div>
  );
}

export default App;
