import React, { useReducer, useEffect, useState } from "react";
import { ThemeContext } from "./contexts";
import appReducer from "./reducers";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";
import Header from "./Header";
import ChangeTheme from './ChangeTheme'

const defaultPosts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Daniel Bugl",
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Daniel Bugl",
  },
];

const blogName = "React Hooks Blog";

export default function App() {
  const [theme, setTheme] = useState({
    primaryColor:'deepskyblue',
    secondaryColor:'coral'
  })

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: defaultPosts,
  });
  const { user, posts } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - ${blogName}`;
    } else {
      document.title = blogName;
    }
  }, [user]);

  return (
    <ThemeContext.Provider
      value={theme}
    >
      <div style={{ padding: 8 }}>
        <Header text={blogName} />
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <UserBar user={user} dispatch={dispatch} />
        <br />
        {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
        <br />
        <hr />
        <PostList posts={posts} />
      </div>
    </ThemeContext.Provider>
  );
}
