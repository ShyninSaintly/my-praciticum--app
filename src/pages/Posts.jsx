import { useEffect, useState } from 'react';
import PostService from '../API/PostService.js';
import { useFetching } from '../hooks/useFetching.js';
import { usePosts } from '../hooks/usePosts.js';
import { getPagesCount } from '../utils/pages.js';
import MyButton from '../Componets/UI/button/MyButton.jsx';
import MyModal from '../Componets/UI/MyModal/MyModal.jsx';
import PostFilter from '../Componets/PostFilter.jsx';
import PostForm from '../Componets/PostForm.jsx';
import PostList from '../Componets/PostList.jsx';
import Loader from '../Componets/UI/Loader/Loader.jsx';
import Pagination from '../Componets/UI/pagination/Pagination.jsx';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    });

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
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
            {postError && <h1>Error happened{postError}</h1>}
            {isPostsLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <Loader />
                </div>
            ) : (
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Lists of items'} />
            )}
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
}
export default Posts;
