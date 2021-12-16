import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './pages/detail';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
