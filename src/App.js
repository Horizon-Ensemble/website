import './App.css';
import HorizonLogo from "./images/logo.png";
import InstagramIcon from "./images/InstagramIcon.png";
import FacebookIcon from "./images/FacebookIcon.png";
import YoutubeIcon from "./images/YoutubeIcon.png";
import { Outlet, Link } from "react-router-dom";
import CardToCulture from './components/CardToCulture';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HorizonLogo} className='logo'/>
        <h1 style={{display: "inline-block", marginLeft: "3em"}}><i>&#9;&#9;music by friends&#9;&#9;</i></h1>
        <nav class="navbar navbar-expand-sm" style={{margin: '5vh'}} 
        defaultChecked={'Home'}>
          <ul class="navbar-nav">
          <li class="nav-item">
              <Link class="nav-link" to="/home">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/callforscores">Call For Scores</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet/>
      <CardToCulture/>
      <footer>
        <div>
          <a href="https://www.instagram.com/horizon.ensemble/"><img className="icon" src={InstagramIcon} alt="A white Instagram icon"/></a>
          <a href="https://www.facebook.com/horizon.ensemble1/"><img className="icon" src={FacebookIcon} alt="A white Facebook icon"/></a>
          <a href="https://www.youtube.com/@HorizonEnsemble"><img className="icon" src={YoutubeIcon} alt="A white Youtube icon"/></a>
        </div>
        <p>
        © Horizon Ensemble 2024 ♪ <br/>
        67 Newbury Street <br/>
        Boston, MA 02215 <br/>
        </p>
        <p><u>Contact Us</u><br/>
        <a href="mailto: horizonensembleboston@gmail.com" style={{color: "#C8E6F7"}}>horizonensembleboston@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
