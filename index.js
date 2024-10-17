import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './src/App';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './src/reportWebVitals';
import About from './src/routes/about';
import CallForScores from "./src/routes/callforscores";
import Home from './src/routes/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
    <Route exact path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="callforscores" element={<CallForScores />} />
      <Route path="*" element={
      <main style={{ padding: "1rem" }}>
        <p>There's nothing here!</p>
        </main>
      }
    />
    </Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
