import Routes from './pages/routes'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
          <div>
              <h1>Hello</h1>
              <BrowserRouter>
                <Routes/>
              </BrowserRouter>
          </div>
  );
}

export default App;
