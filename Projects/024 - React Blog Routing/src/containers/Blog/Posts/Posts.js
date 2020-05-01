import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import classes from "./Posts.module.css";
import axios from "../../../axios";
import { Route } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: [],
    postId: null,
  };

  loadData = () => {
    axios
      .get("/posts")
      .then((response) => {
        this.setState({ posts: response.data.slice(0, 4) });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.loadData();
  }

  postClickedHandler = (id) => {
    this.props.history.push("/posts/" + id);
  };

  render() {
    const posts = this.state.posts
      ? this.state.posts.map((post) => {
          return (
            <Post
              title={post.title}
              author={post.userId}
              clicked={this.postClickedHandler}
              id={post.id}
              key={post.id}
            />
          );
        })
      : null;

    return (
      <div>
        <div className={classes.Posts}>{posts}</div>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}
export default Posts;
