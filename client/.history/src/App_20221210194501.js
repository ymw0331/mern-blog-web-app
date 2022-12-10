import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path='/' element={<Home /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;