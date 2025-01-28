import './styles/App.css';
import { useMemo, useState } from 'react';
import PostList from './Componets/PostList.jsx';
import PostForm from './Componets/PostForm.jsx';
import PostFilter from './Componets/PostFilter.jsx';
import MyModal from './Componets/UI/MyModal/MyModal.jsx';
import MyButton from './Componets/UI/button/MyButton.jsx';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'ббб', body: 'вы' },
        { id: 2, title: 'aaa', body: 'ывы' },
        { id: 3, title: 'ввв', body: 'к' },
    ]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };
    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };
    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Create Post
            </MyButton>
            <MyModal visible={modal} setModal={setModal}>
                {' '}
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Lists of items'} />
        </div>
    );
}

export default App;
