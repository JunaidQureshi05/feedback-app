import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStat from './components/FeedbackStat';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {' '}
                <div className="container">
                  <FeedbackForm />
                  <FeedbackStat />
                  <FeedbackList />
                </div>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <div className="container">
                <AboutPage />
              </div>
            }
          />
        </Routes>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
