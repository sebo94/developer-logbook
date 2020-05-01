import React, { Component } from "react";
import classes from "./FullPost.module.css";
import axios from "../../../axios";

class fullPost extends Component {
  state = {
    fullPost: null,
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData = () => {
    if (this.props.match.params.id) {
      if (
        !this.state.fullPost ||
        (this.state.fullPost &&
          this.props.match.params.id !== +this.state.fullPost.id)
      ) {
        axios.get("/posts/" + this.props.match.params.id).then((response) => {
          this.setState({ fullPost: response.data });
        });
      }
    }
  };

  render() {
    console.log("i am renderinig the fullpost")
    let fullPost = <p style={{ textAlign: "center" }}>Please Select a Post</p>;
    if (this.props.match.params.id) {
      fullPost = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.fullPost) {
      fullPost = (
        <div className={classes.FullPost}>
          <h1>{this.state.fullPost.title}</h1>
          <p>{this.state.fullPost.body}</p>
          <button className={classes.BtnDelete}>Delete</button>
        </div>
      );
    }
    return <div>{fullPost}</div>;
  }
}

export default fullPost;
