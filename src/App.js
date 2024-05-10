import './App.css';
import AppBarPrivate from './components/AppBarComponent';
import AppBarPublic from './components/AppBarPublic';
import ScanPage from './components/routes/ScanPage'
import SignIn from './components/routes/SignIn'
import SignUp from './components/routes/SignUp'
import HomePage from './components/routes/HomePage'
import AllScannedDocumentPage from './components/routes/AllScannedDocumentPage'
import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from './components/api/PrivateRoutes';
import { useAuth } from './components/api/AuthContext';
import ScannedDocumentDetailed from './components/routes/ScannedDocumentDetailed';
import Footer from './components/Footer';


function App() {

  const { token } = useAuth();

  return (
    <div className="App" >
      {token ? <AppBarPrivate /> : <AppBarPublic />}
      <div className="main-content" style={{ paddingBottom: '2.5rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/scan" element={<ScanPage />} exact />
            <Route path="/scanned" element={<AllScannedDocumentPage />} exact />
            <Route path="/detail/:id" element={<ScannedDocumentDetailed />} exact />
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;