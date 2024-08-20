import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import WeterPage from './page/WeterPage';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<WeterPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
