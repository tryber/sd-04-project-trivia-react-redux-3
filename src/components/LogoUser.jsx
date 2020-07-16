import React, { Component } from "react";
import { connect } from "react-redux";

class LogoUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { urlGravatar } = this.props;
    console.log(urlGravatar);
    return (
      <div>
        <img src={urlGravatar} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    urlGravatar: state.login.urlGravatar,
  };
};

export default connect(mapStateToProps)(LogoUser);
