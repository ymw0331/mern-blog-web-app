import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';

function App() {
  return (
    <Router>
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/articles-list' element={<ArticlesList />} />
          <Route path='/articles-list' element={<ArticlesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
