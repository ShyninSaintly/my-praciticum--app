import './styles/App.css';
import { useMemo, useState } from 'react';
import PostList from './Componets/PostList.jsx';
import PostForm from './Componets/PostForm.jsx';
import MySelect from './Componets/UI/select/MySelect.jsx';
import MyInput from './Componets/UI/input/MyInput.jsx';
import PostFilter from './Componets/PostFilter.jsx';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'ббб', body: 'вы' },
        { id: 2, title: 'aaa', body: 'ывы' },
        { id: 3, title: 'ввв', body: 'к' },
    ]);
    const [filter, setFilter] = useState({ sort: '', query: '' });

    const sortedPosts = useMemo(() => {
        console.log('function worked correctly');
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };
    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };
    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {sortedAndSearchedPosts.length ? (
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Lists of items'} />
            ) : (
                <h1 style={{ textAlign: 'center' }}>No posts found</h1>
            )}
        </div>
    );
}

export default App;
