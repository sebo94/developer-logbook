import React, { Component, Fragment, Suspense } from "react";
import classes from "./Blog.module.css";
import { Route, NavLink, Switch } from "react-router-dom";
import Posts from './Posts/Posts';
const NewPost = React.lazy(() => import("./NewPost/NewPost"));

class Blog extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <nav>
            <ul className={classes.List}>
              <li className={classes.Link}>
                <NavLink
                  to="/posts"
                  activeStyle={{ textDecoration: "underline" }}
                  exact
                >
                  Posts
                </NavLink>
              </li>
              <li className={classes.Link}>
                <NavLink
                  activeStyle={{ textDecoration: "underline" }}
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route
            path="/new-post"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}><NewPost/></Suspense>
            )}
          />
          <Route path="/posts" component={Posts}/>
        </Switch>
      </Fragment>
    );
  }
}
export default Blog;
