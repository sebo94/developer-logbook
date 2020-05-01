import React from "react";
import classes from "./NewPost.module.css";

const newPost = (props) => (
  <div className={classes.NewPost}>
    <h1>Add a post</h1>
    <h2>Title</h2>
    <input type="text" className={classes.Title} />
    <h2>Content</h2>
    <input type="text" className={classes.Content} />
    <h2>Author</h2>
    <select className={classes.Select} id="user">
      <option value="Zeb">Zeb</option>
      <option value="Stefania">Stefania</option>
      <option value="Giulia">Giulia</option>
    </select>
    <button className={classes.BtnAdd}>ADD POST</button>
  </div>
);

export default newPost;
