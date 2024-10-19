import React from "react";
import WPALogo from "../images/WPALogo.png";
import BCCLogo from "../images/BCCLogo.jpg";
import TBFLogo from "../images/TBFLogo.png";

class CardToCulture extends React.Component {
  render() {
    return <body className="acknowledgements">
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
      <div>
      <p>
        Thank you for supporting the Horizon Ensemble! We are fortunate to receive the support of many organizations and friends, such as:
      </p>
      <img style={{margin: "2vh"}} src={WPALogo} width="20%" height="20%"/>
      <img style={{margin: "2vh"}} src={BCCLogo} width="40%" height="40%"/>
      <img style={{margin: "2vh"}} src={TBFLogo} width="20%" height="20%"/>
      </div>
    </div>
  </body>;
  }
}

export default CardToCulture;