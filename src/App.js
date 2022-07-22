import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// context
import { GlobalProvider } from './context/GlobalState';

// routes components
import { Search } from './routes/Search';
import { History } from './routes/History';

export default function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="*" element={ <Search /> } />
            <Route path="/history" element={ <History /> } />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  )
}
