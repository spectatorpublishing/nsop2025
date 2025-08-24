import './App.css';
import UniversityNewsPage from './Pages/UniversityNewsPage';
import CreditsPage from './Pages/CreditsPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<UniversityNewsPage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<CreditsPage />} />
        </Routes>
    </div>
  );
}

export default App;
