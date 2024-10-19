import logo from "../images/logo.png";
import CallForScoresArtists from "../images/CallForScoresArtists.jpg";
import HenselOvertureExcerpt from "../images/HenselOvertureExcerpt.png";

export default function About() {
  return (
    <div>
      <main className="page-header">
        <h2 >About the Horizon Ensemble</h2>
      </main>
      <div style={{backgroundColor: "white"}}>
        <img className="big-image" src={logo}/>
      </div>
      <p style={{fontSize: "21px", margin: "10vh"}}>
        Based in Boston, Massachusetts, the <strong>Horizon Ensemble</strong> is an orchestra that performs music of history and music by friends. We are dedicated to performing orchestral and chamber music by young living composers alongside the diverse repertoire of history. Founded in May 2021, in the past three years, we’ve performed thirteen amazing concerts here in the heart of Boston!
      </p>
      <body className='outreach'>
        <div style={{margin: '10vh'}}>
          <h3><strong>Music by Friends</strong></h3>
          <p style={{fontSize: "21px"}}>Every Horizon Ensemble concert features at least one piece by a young living composer. So far, we’ve collaborated with 22 different composer friends to present their new works, including 14 world premieres! By supporting the development of emerging composers, we are investing in the future of composition and building community in the music world.</p>
        </div>
        <img src={CallForScoresArtists} className='ensemble-picture' style={{margin: "15vh"}}/>
      </body>
      <body className="outreach" style={{backgroundColor: "#C8E6F7"}}>
      <img src={HenselOvertureExcerpt} className='ensemble-picture' style={{margin: "15vh"}}/>
      <div style={{margin: '10vh'}}>
        <h3><strong>Music from History</strong></h3>
        <p style={{fontSize: "21px"}}>We draw from the rich repertoire of the past to color our performances. Through historical and musical research, we present a wide variety of pieces from history. This includes a lot of music by women and by composers of color, whose music we are committed to featuring as part of our concert programs!</p>
      </div>
      </body>
  </div>
  );
}