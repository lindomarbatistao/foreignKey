
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
