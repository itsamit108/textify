import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Alert from './components/Alert';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox';
import './App.css';

const LIGHT_BACKGROUND_COLOR = '#b7c9ee';
const DARK_BACKGROUND_COLOR = '#252539';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const setBodyBackgroundColor = () => {
      if (mode === 'light') {
        document.body.style.backgroundColor = LIGHT_BACKGROUND_COLOR;
        document.body.style.backgroundImage = 'none';
        document.body.style.background =
          'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
        document.body.style.backgroundSize = '400% 400%';
        document.body.style.animation = 'gradient 15s ease infinite';
      } else {
        document.body.style.backgroundColor = DARK_BACKGROUND_COLOR;
        document.body.style.backgroundImage = 'none';
      }
    };
    setBodyBackgroundColor();
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar title="Textify" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextBox showAlert={showAlert} mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer mode={mode} />
      </BrowserRouter>
    </>
  );
}

export default App;
