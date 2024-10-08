import './App.css';
import HorizonLogo from "./images/logo.png";
import CallForScoresArtists from "./images/CallForScoresArtists.jpg";
import HorizonEnsemble1 from "./images/HorizonEnsemble1.jpg";
import Carousel from './components/Carousel.js';
import ConcertTeaser from "./images/ConcertTeaser.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HorizonLogo} className='logo'/>
        <h1 style={{textAlign: "left"}}>Horizon Ensemble</h1>

        <nav class="navbar navbar-expand-sm" style={{margin: '5vh'}}>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Media</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Support</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* i should really be putting these bodies into divs... */}
      <body style={{textAlign: 'left'}}>
        <Carousel/>
        <div style={{margin: '10vh'}}>
          <h2><strong>Hello!</strong></h2>
          <p style={{fontSize: '21px'}}>Based in Boston, Massachusetts, the <strong>Horizon Ensemble</strong> performs music of history and music by friends. We believe in enriching our communities of musicians and audiences and supporting the development of young living composers!</p>
        </div>
      </body>
      <body className='outreach'>
        <img src={ConcertTeaser} className='ensemble-picture' style={{margin: "15vh"}}/>
        <div style={{margin: '10vh'}}>
          <h3><strong><u>Horizon Ensemble: Freedom</u><br/>
          Sunday, October 6 at 3:00 PM</strong></h3>
          <p>Come enjoy some musical expressions of the human desire for freedom. Catch the world premieres of two pieces by friends: Andrés Ballesteros’s <strong>Shaheed</strong> (Martyr) and Sepehr Pirasteh’s <strong>Laleh-zar</strong> (Tulip Field). 
          Enjoy the <strong>Symphony in C</strong> by Marianna Martines, the first known symphony by a woman. We’ll finish with Johannes Brahms’s monumental <strong>Symphony No. 3 in F major</strong>, based on his personal motto: “Free but happy”! 
Learn more <u>here.</u></p>
</div>
      </body>
      <body className='season'>
        <h3><u>Learn more about the Horizon Ensemble’s 2024–2025 season!</u></h3>
        </body>
      <body className='youtube'>
        <div className="displays">
          <p>From our last concert: 
            <br/>
            Florence Price’s The Oak <br/>
            A mysterious orchestral exploration of history and dreams...
            </p>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
              </div>
        </div>
        <div className="displays">
          <p>Throwback to summer 2023: <br/>
            A  lively Serenade for wind instruments, <br/>
            written by 4 Horizon composer friends!
            </p>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
              </div>
        </div>
      </body>
      <body className="outreach">
        <div className="displays">
          <h3><strong><u>Let's stay in touch!</u></strong></h3>
          <p>
            Join the Horizon Ensemble mailing list to keep up-to-date with upcoming concerts, events, and more.
          </p>
          <button type="button" class="btn btn-primary btn-lg navy-button"><strong>Join the mailing list!</strong></button>
          <img src={HorizonEnsemble1} className='ensemble-picture'/>
        </div>
        <div className='displays'>
          <h3><strong><u>For composers: <br/>
            Call for Scores</u></strong></h3>
            <p>
              Be part of the Horizon Ensemble’s first-ever call for scores!<br/> We are looking for an <strong>orchestral piece</strong> for our April concert, and mid-sized <strong>chamber pieces</strong> for a late spring recording project. 
              <br/> Learn more here!
            </p>
            <img src={CallForScoresArtists} className='ensemble-picture'/>
        </div>

      </body>
      <body className="acknowledgements">
        <div className="displays">
          <h4><u>Card to Culture</u></h4>
          <p>
            The Horizon Ensemble is proud to participate in Mass Cultural Council's <strong><u>Card to Culture program!</u></strong> This initiative operates in collaboration with the Department of Transitional Assistance, the Department of Public Health's WIC Nutrition Program, the Massachusetts Health Connector, and hundreds of organizations by making cultural programming accessible to those for whom cost is a participation barrier. <br/>
            <br/>EBT, WIC, and ConnectorCare cardholders receive <strong><u>free admission</u></strong> to all Horizon Ensemble activities! We do not require photo IDs, nor do we require EBT, WIC, or ConnectorCare cards at our events. See the complete list of participating organizations offering EBT, WIC, and ConnectorCare discounts.
          </p>
        </div>
        <div className="displays">
          <h4>
          <u>Thank you!</u>
          </h4>
          <p>
            Thank you for supporting the Horizon Ensemble! We are fortunate to receive the support of many organizations and friends, such as:
          </p>
        </div>
      </body>
      <footer>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-instagram icon" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-facebook icon" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-youtube icon" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
        </div>
        <p>
        © Horizon Ensemble 2024 ♪ <br/>
        67 Newbury Street <br/>
        Boston, MA 02215 <br/>
        </p>
        <p><u>Contact Us</u><br/>
        horizonensembleboston@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
