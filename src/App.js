import Routes from './pages/routes'
import {BrowserRouter} from 'react-router-dom'
import TopBar from "./components/TopBar";
import {CurrentUserProvider} from "./contexts/currentUser";

function App() {
  return (
      <CurrentUserProvider>
          <BrowserRouter>
              <TopBar/>
              <Routes/>
          </BrowserRouter>
      </CurrentUserProvider>

  );
}

export default App;
