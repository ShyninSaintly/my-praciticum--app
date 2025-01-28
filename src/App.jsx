import "./styles/App.css";
import {useState} from "react";
import PostList from "./Componets/PostList.jsx";
import PostForm from "./Componets/PostForm.jsx";
import MySelect from './Componets/UI/select/MySelect.jsx';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "ббб", body: "вы" },
    { id: 2, title: "aaa", body: "ывы" },
    { id: 3, title: "ввв", body: "к" },
  ]);
  const [selectedSort, setSelectedSort] = useState('')
const createPost = (newPost) => {
    setPosts([...posts,newPost]);
}
const removePost = (post) => {
   setPosts(posts.filter(p=> p.id !== post.id))
}
const sortPosts = (sort) => {
      setSelectedSort(sort);
      setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])));
}
  return (
    <div className="App">
      <PostForm create={createPost}/>
        <hr style={{margin:"15px 0"}}/>
        <div>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
            defaultValue='Sort'
            options={[
                {value:'title',name:"By name"},
                {value:'body',name:"By description"}
            ]}/>
        </div>
        {posts.length
            ?
            <PostList remove={removePost} posts={posts} title={'Lists of items'} />
            :
            <h1 style={{textAlign:'center'}}>
                No posts found
            </h1>
        }
    </div>
  );
}
export default App;
