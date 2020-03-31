import React from "react";

import Form from "./components/Form";
import Axios from "axios";
import "./App.scss";

class App extends React.Component {
  state = {
    first_name: null,
    last_name: null
  };
  getAccount = async e => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    Axios.get(`https://api.ona.io/api/v1/users/${username}`).then(res => {
      const first_name = res.data.first_name;
      const last_name = res.data.last_name;
      this.setState({
        first_name,
        last_name
      });
    });
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 form-container">
                  <Form getAccount={this.getAccount} />
                </div>
                <div className="col-lg-5  results">
                  <div className="account-details">
                    {this.state.first_name ? (
                      <p className="details_key">
                        account details: <br />
                        <br />
                        <br />
                        <span className="details_value">
                          first name: {this.state.first_name}
                          <br />
                          last name: {this.state.last_name}
                        </span>
                      </p>
                    ) : (
                      <p className="null_entry">Please enter a username</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
