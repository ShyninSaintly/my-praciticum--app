import React from "react";
import "./styles/App.css";
import { useState } from "react";
import PostItem from "./Componets/PostItem";
import Counter from "./Componets/Counter";
import ClassCounter from "./Componets/ClassCouter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);
  return (
    <div className="App">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}
export default App;
