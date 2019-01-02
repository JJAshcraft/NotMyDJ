import React, { Component, Fragment } from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import "./App.css";
import Login from "./components/Login/Login";
import { withRouter, Router, Route, Redirect } from "react-router-dom";
import history from "./history";
import axios from "axios";
import co from "co";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      search: "",
      isLoggedIn: false,
      username: "",
      token: "",
      searchData: null,
      user: {
        id: null
      }
    };
  }

  async componentDidMount() {
    // this.setState({ data: dummyData });

    await this.setToken();
    await this.isLoggedIn();
  }

  search = event => {
    event.preventDefault();
    let term = event.target.value;
    let searchData;
    if (this.state.data) {
      searchData = this.state.data.slice();
      searchData = searchData.filter(playlist => playlist.name.includes(term));

      if (term.length < 1) {
        this.setState({
          searchData: null
        });
      } else {
        this.setState({
          searchData
        });
      }
    }
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  setToken = () => {
    if (history.location.hash) {
      let token = history.location.hash.substring(
        14,
        history.location.hash.length - 44
      );
      console.log(token);
      localStorage.setItem("token", token);
    }
  };

  updateData = data => {
    this.setState({ data });
  };

  isLoggedIn = () => {
    console.log("isloggedin");
    console.log("hist", history);
    var token;
    var user;
    if (!localStorage.token) {
      token = history.location.hash.substring(
        14,
        history.location.hash.length - 44
      );
      console.log(token);
      localStorage.setItem("token", token);
    }
    token = localStorage.token;
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response);
        user = response.data;
        console.log(user);
        this.setState({ isLoggedIn: true, user: user });
      });
  };

  // axios
  //   .get(
  //     `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`
  //   )
  //   .then(response => {
  //     this.setState({ data: response.data.data });
  //   });

  render() {
    return (
      <Fragment>
        <Route
          exact
          path="/"
          render={() =>
            this.state.isLoggedIn ? <Redirect to="/spotify" /> : <Login />
          }
        />
        <Route
          path="/spotify"
          render={() =>
            this.state.isLoggedIn ? (
              <PostsPage
                login={this.login}
                user={this.state.user}
                searchData={this.state.searchData}
                handleChange={this.handleChange}
                value={this.state.search}
                search={this.search}
                updateData={this.updateData}
              />
            ) : (
              <Login />
            )
          }
        />
      </Fragment>
    );
  }
}

export default App;
