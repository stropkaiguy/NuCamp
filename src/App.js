import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsitesDirectoryPage from './pages/CampsiteDirectoryPage';
import Header from './components/Header.js';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import './App.css';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import {fetchComments} from './features/comments/commentSlice';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
    dispatch(fetchComments());
}, [dispatch]);

  return (
    <div className="App">
      <Header />
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='contact' element={<ContactPage/>}/>
         <Route path='about' element={<AboutPage />}/>
         <Route path='directory' element={<CampsitesDirectoryPage/>}/>
        <Route 
          path='directory/:campsiteId'
          element={<CampsiteDetailPage/>}
          />
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
