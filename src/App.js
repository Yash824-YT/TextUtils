import './App.css';
import Alert from './Compontes/Alert';
// import About from './Compontes/About';
import Navbar from './Compontes/Navbar';
import TextForm from './Compontes/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode";
    }
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
    {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert Alert={alert} />
        
        <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Enter the Text to Analyze Below" />
        {/* <Routes> */}
          {/* <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the Text to Analyze Below" /> } /> */}

          {/* <Route path="/about" element={<About />} />
        </Routes> */}
      </div>

      {/* </Router> */}
    </>
  );
}

export default App;
