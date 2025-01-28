import "./styles/App.css";
import {useState} from "react";
import PostList from "./Componets/PostList.jsx";
import PostForm from "./Componets/PostForm.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);
const createPost = (newPost) => {
    setPosts([...posts,newPost]);
}
const removePost = (post) => {
   setPosts(posts.filter(p=> p.id !== post.id))
}
  return (
    <div className="App">
      <PostForm create={createPost}/>
        <hr style={{margin:"15px 0"}}></hr>
        <div>
            <select>
                <option value="value1">По названию</option>
                <option value="value1">По описанию</option>
            </select>
        </div>
        {posts.length
            ?
            <PostList remove={removePost} posts={posts} title={'Lists of items'} />
            :
            <h1 style={{textAlign:'center'}}>No posts found</h1>}

    </div>
  );
}
export default App;
