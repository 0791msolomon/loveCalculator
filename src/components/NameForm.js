import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOne: "",
      nameTwo: "",
      disengage: true,
      color: "danger"
    };
  }

  calculateLove = e => {
    e.preventDefault();
    let { nameOne, nameTwo } = this.state;
    let data = {
      nameOne,
      nameTwo,
      chanceAtLove: Math.floor(Math.random() * 100 + 1)
    };
    this.props.loveInfo(data);
  };
  onChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => this.checkInputs()
    );
  };

  checkInputs = () => {
    let { nameOne, nameTwo } = this.state;
    nameOne && nameTwo
      ? this.setState({ disengage: false, color: "primary" })
      : this.setState({ disengage: true, color: "danger" });
  };

  clearForm = e => {
    e.preventDefault();
    this.setState({
      nameOne: "",
      nameTwo: "",
      disengage: true,
      color: "danger"
    });
    this.props.clearForm();
  };

  render() {
    let { nameOne, nameTwo, color, disengage } = this.state;
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">First Name</label>
            <input
              className="form-control"
              name="nameOne"
              value={nameOne}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Second Name</label>
            <input
              className="form-control"
              name="nameTwo"
              value={nameTwo}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div className="form-group">
            <button
              disabled={disengage}
              onClick={this.calculateLove}
              className={`btn-lg btn-${color}`}
            >
              {disengage
                ? "Please fill out both names"
                : "Calculate Love Match"}
            </button>
          </div>
        </form>
        {!disengage ? (
          <button className="btn-md btn-warning" onClick={this.clearForm}>
            Clear Form
          </button>
        ) : null}
      </div>
    );
  }
}
export default NameForm;
