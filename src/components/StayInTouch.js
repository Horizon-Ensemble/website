import React from "react";
import CallForScoresArtists from "../images/CallForScoresArtists.jpg";
import HorizonEnsemble1 from "../images/HorizonEnsemble1.jpg";

class StayInTouch extends React.Component {
  render() {
    return <body className="outreach">
        <div className="displays">
          <h3><strong><u>Let's stay in touch!</u></strong></h3>
          <p>
            Join the Horizon Ensemble mailing list to keep up-to-date with upcoming concerts, events, and more.
          </p>
          <a href="mailto: horizonensembleboston@gmail.com?subject=I%20would%20like%20to%20be%20added%20to%20the%20mailing%20list!&body=Hello%20Horizon%20Ensemble!%20Please%20add%20me%20to%20your%20mailing%20list.%20Sincerely,%20a%20new%20music%20friend.">
          <button type="button" class="btn btn-primary btn-lg navy-button"><strong>Join the mailing list!</strong></button>
          </a>
          <img src={HorizonEnsemble1} className='ensemble-picture'/>
        </div>
        <div className='displays'>
          <h3><strong><u>For composers: <br/>
            Call for Scores</u></strong></h3>
            <p>
              Be part of the Horizon Ensemble’s first-ever call for scores!<br/> We are looking for an <strong>orchestral piece</strong> for our April concert, and mid-sized <strong>chamber pieces</strong> for a late spring recording project. 
              <br/> Learn more <a href="/callforscores">here!</a>
            </p>
            <img src={CallForScoresArtists} className='ensemble-picture'/>
        </div>
      </body>;
  }
}

export default StayInTouch;