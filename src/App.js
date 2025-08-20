import './App.css';
import UniversityNewsPage from './Pages/UniversityNewsPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<UniversityNewsPage />} />
        </Routes>
    </div>
  );
}

export default App;
