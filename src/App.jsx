import "./styles/App.css";
import {useRef, useState} from "react";
import PostList from "./Componets/PostList.jsx";
import MyButton from "./Componets/UI/button/MyButton.jsx";
import MyInput from "./Componets/UI/input/MyInput.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);
  const[post,setPost]=useState({title:'',body:''});

  const addNewPost = (e) => {
      e.preventDefault()
    setPosts([...posts, {...post,id:Date.now()}]);
      setPost({title:'',body:''})
  }
  return (
    <div className="App">
      <form>
        <MyInput  value={post.title}  onChange={e=>setPost({...post,title:e.target.value})}type="text" placeholder={'Title'}/>
        <MyInput value={post.body}  onChange={e=>setPost({...post,body:e.target.value})}type="text" placeholder="Description"/>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title={'Lists of items'} />
    </div>
  );
}
export default App;
