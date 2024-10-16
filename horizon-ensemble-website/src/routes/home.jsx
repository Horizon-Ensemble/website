import CallForScoresArtists from "../images/CallForScoresArtists.jpg";
import HorizonEnsemble1 from "../images/HorizonEnsemble1.jpg";
import Carousel from '../components/Carousel.js';
import ConcertTeaser from "../images/ConcertTeaser.png";

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
    </div>
  );
}