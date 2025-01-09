import "./styles/App.css";
import { useState } from "react";
import PostList from "./Componets/PostList.jsx";
import MyButton from "./Componets/UI/button/MyButton.jsx";
import MyInput from "./Componets/UI/input/MyInput.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);
  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder={'Title'}/>
        <MyInput type="text" placeholder="Description"/>
        <MyButton disabled>Create post</MyButton>
      </form>
      <PostList posts={posts} title={'Lists of items'} />
    </div>
  );
}
export default App;
