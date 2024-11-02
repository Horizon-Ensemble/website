import Carousel from '../components/Carousel.js';
import ConcertTeaser from "../images/ConcertTeaser.png";
import StayInTouch from "../components/StayInTouch";

export default function Home() {
  return (
    <div>
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
          <h3><strong><u>Horizon Ensemble: Shades of Autumn</u><br/>
          Sunday, November 16 at 3:00 PM</strong></h3>
          <p>
            Come celebrate this crisp, cozy season with the Horizon Ensemble.
            We'll start with <strong>Autumn Music</strong> for wind quintet by <strong>Jennifer Higdon</strong> and 
            <strong>Three Moods in New England</strong> by our friend <strong>Hayley Qin</strong>. <strong>Igor Stravinsky's</strong> lively 
            <strong>Dumbarton Oaks</strong> concerto shines, full of rhythmic energy. 
            Finally, we'll perform the rare <strong>Symphony No. 10: "To Autumntime"</strong> by the German composer <strong>Joachim Raff</strong>.
             
            Learn more <a href="www.eventbrite.com/e/shades-of-autumn-tickets-1050785847757">here!</a>
          </p>
          </div>
      </body>
      <body className='season'>
        <a style={{color: "white"}} href="https://calendar.google.com/calendar/embed?src=horizonensembleboston%40gmail.com&ctz=UTC"><h3><u>Learn more about the Horizon Ensemble’s 2024–2025 season!</u></h3></a>
        </body>
      <body className='youtube'>
        <div className="displays">
          <h4 style={{fontSize: "21px"}}><strong>From our last concert: 
            <br/>Florence Price’s The Oak <br/></strong></h4>
            <p>A mysterious orchestral exploration of history and dreams...
            </p>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/vmaTdD_bC70?si=xj49QvZhAfLAyDv4" allowfullscreen></iframe>
              </div>
        </div>
        <div className="displays">
          <h4 style={{fontSize: "21px"}}><strong>Throwback to summer 2023: <br/></strong></h4>
          <p>A  lively Serenade for wind instruments, <br/>
            written by 4 Horizon composer friends!
            </p>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/I9Rt2kAbbbc?si=oyUUlG9bMeZta9At" allowfullscreen></iframe>
              </div>
        </div>
      </body>
      <StayInTouch/>
    </div>
  );
}
