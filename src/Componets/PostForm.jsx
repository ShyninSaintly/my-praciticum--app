import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput.jsx";
import MyButton from "./UI/button/MyButton.jsx";

const PostForm = () => {
    const[post,setPost]=useState({title:'',body:''});
    return (
        <form>
            <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text"
                     placeholder={'Title'}/>
            <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value})} type="text"
                     placeholder="Description"/>
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;