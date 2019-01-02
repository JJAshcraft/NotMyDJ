import React, { Component } from "react";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import PostContainer from "./PostContainer";
import "./post-container.css";
import history from "../../history";
import axios from "axios";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  async componentDidMount() {
    const playlists = await this.getPlaylists();
  }

  getPlaylists = () => {
    var token;
    if (!localStorage.token) {
      var token = history.location.hash.substring(
        14,
        history.location.hash.length - 44
      );
      console.log(token);
      localStorage.setItem("token", token);
    }
    token = localStorage.token;
    var userId = this.props.user.id;
    console.log(this.props.user);
    axios
      .get(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log("response", response.data);
        this.props.updateData(response.data.items);
        this.setState({ data: response.data.items });
      });
  };

  showPlaylists = () => {
    return (
      <div className="App-body">
        {this.props.searchData
          ? this.props.searchData.map((playlist, index) => {
              return (
                <PostContainer
                  key={Math.random()}
                  user={this.props.user}
                  playlist={playlist}
                />
              );
            })
          : this.state.data.map((playlist, index) => {
              return (
                <PostContainer
                  key={Math.random()}
                  user={this.props.user}
                  playlist={playlist}
                />
              );
            })}
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBarContainer
            handleChange={this.props.handleChange}
            value={this.props.value}
            search={this.props.search}
          />
        </header>
        {this.state.data ? this.showPlaylists() : null}
      </div>
    );
  }
}
export default PostsPage;
