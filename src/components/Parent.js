import React from "react";
import NameForm from "./NameForm";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameOne: "", nameTwo: "", percentage: 0, message: "" };
  }

  loveInfo = data => {
    this.setState({
      percentage: data.chanceAtLove,
      nameOne: data.nameOne,
      nameTwo: data.nameTwo
    });
  };
  clearForm = () => {
    this.setState({ percentage: 0 });
  };
  render() {
    let { percentage, message, nameOne, nameTwo } = this.state;
    if (percentage > 74) {
      message = `${nameOne} and ${nameTwo} have strong love!`;
    } else if (percentage < 75 && percentage > 49) {
      message = `${nameOne} and ${nameTwo} Have decent love!`;
    } else if (percentage < 50 && percentage > 24) {
      message = `${nameOne} and ${nameTwo} need some work!`;
    } else {
      message = `${nameOne} and ${nameTwo} are a lost cause!`;
    }
    return (
      <div>
        <NameForm loveInfo={this.loveInfo} clearForm={this.clearForm} />
        <br />
        <div className="progress">
          <div
            className={`progress-bar `}
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {`${percentage}%`}
          </div>
        </div>
        {percentage ? <h4 id="loveMessage">{message}</h4> : null}
      </div>
    );
  }
}
export default Parent;
