import logo from "../images/logo.png";
import CallForScoresArtists from "../images/CallForScoresArtists.jpg";

export default function CallForScores() {
  return (
    <div>
    <main className="page-header">
        <h2>Horizon Ensemble 2024 Call for Scores!</h2>
    </main>
    <div style={{backgroundColor: "white"}}>
      <img className="big-image" src={logo}/>
    </div>
    <p style={{fontSize: "21px", margin: "10vh"}}>
       <h3 style={{fontWeight: "bolder"}}>Calling all composers!</h3>
       The Horizon Ensemble is happy to announce our very first Call for Scores!
       <br/> We’re looking for an <strong>orchestral work</strong> for our April concert, as well as 
       <br/><strong>chamber music for 7-12 players</strong> to for a late spring recording project.
       <br/>All composers are welcome to apply!
    </p>
    <body className='outreach'>
        <div style={{margin: '10vh'}}>
          <h3><strong>An orchestral piece...</strong></h3>
          <p style={{fontSize: "21px"}}>Our spring concert, <strong>Massachusetts Voices,</strong> will feature one orchestral piece by you alongside music by Ben Nacar, Amy Beach, and Leonard Bernstein! One piece will be selected for a live performance by the Horizon Ensemble on April 6, 2024 in Boston, Massachusetts.
Submissions should be 8 to 15 minutes long.
<br/><br/>Click <a href='JULIAN PUT ALLOWED ORCH INSTRUMENTATION LIST HERE'>here</a> for a list of allowed instruments.</p>
        </div>
        <div style={{margin: '10vh'}}>
          <h3><strong>...and some chamber music!</strong></h3>
          <p style={{fontSize: "21px"}}>As part of our mission to support young composers, the Horizon Ensemble is organizing a <strong>recording project.</strong> Three chamber pieces will be selected for a professional-level studio recording to be made in late springtime, conducted by our music director Julian Gau. Submissions should be 8 to 12 minutes long.
<br/><br/>Click <a href='JULIAN PUT ALLOWED CHAMBER INSTRUMENTATION LIST HERE'>here</a> for a list of allowed instruments.</p>
        </div>
    </body>
    <body className="outreach" style={{backgroundColor: "#C8E6F7"}}>
      <div style={{margin: '10vh', textAlign: "left"}}>
        <h3><strong>Submissions should include:</strong></h3>
        <p style={{fontSize: "21px"}}>
          <ul>
            <li><u>Full scores and parts</u> without names       
         <br/><i>(the evaluation process is name-blind)</i></li>
         <li>Composer info: bio, contact info, socials (optional) 
          <br/><i>(this is for after the piece is chosen)</i></li>
          <li>Performance notes if needed</li>
          <li>Program notes</li>
          <li>Audio (live recording or digital realization)</li>
          </ul>
          Submissions which lack any of these elements, which are outside of the above length requirements, or which have scores or parts with names on them will not be considered.  
</p>
      </div>
      <img src={CallForScoresArtists} className='ensemble-picture' style={{margin: "15vh"}}/>
      </body>
      <body className="outreach" style={{flexDirection: "column"}}>
        <p style={{fontSize: "21px", textAlign: "left"}}>
          Applications will be open from <strong>October 23, 2024</strong> to <strong>December 1, 2024.</strong>
          <br/>If you have any questions, please contact us at horizonensembleboston@gmail.com.
          <br/>Thank you for considering becoming one of Horizon Ensemble’s composer friends!</p>
        <a href='JULIAN PUT YOUR GOOGLE FORM HERE'><h3><strong><u>Ready to submit?</u></strong></h3></a>
        <button type="button" class="btn btn-primary btn-lg navy-button"><strong>I'm ready!</strong></button>
      </body>
  </div>
  );
}