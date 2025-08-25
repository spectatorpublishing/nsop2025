import './App.css';
import UniversityNewsPage from './Pages/UniversityNewsPage';
import SportsPage from './Pages/SportsPage';
import ACPage from './Pages/ACPage';
import CityPage from './Pages/CityPage';
import SpectrumPage from './Pages/SpectrumPage';
import CrosswordsPage from './Pages/CrosswordsPage';
import VideoPage from './Pages/VideoPage';
import { Routes, Route } from 'react-router-dom';
import OpinionPage from './Pages/OpinionPage';
import AudioPage from './Pages/AudioPage';


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<UniversityNewsPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/ac" element={<ACPage />} />
          <Route path="/city" element={<CityPage />} />
          <Route path="/spectrum" element={<SpectrumPage />} />
          <Route path="/crosswords" element={<CrosswordsPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path ="/opinion" element={<OpinionPage />} />
          <Route path ="/audio" element={<AudioPage />} />
        </Routes>
    </div>
  );
}

export default App;
