import { useEffect, useState } from 'react';
import PostService from '../API/PostService.js';
import { useFetching } from '../hooks/useFetching.js';
import { usePosts } from '../hooks/usePosts.js';
import { useObserver } from '../hooks/useObserver.js';
import { useRef } from 'react';
import { getPagesCount } from '../utils/pages.js';
import MyButton from '../Componets/UI/button/MyButton.jsx';
import MyModal from '../Componets/UI/MyModal/MyModal.jsx';
import PostFilter from '../Componets/PostFilter.jsx';
import PostForm from '../Componets/PostForm.jsx';
import PostList from '../Componets/PostList.jsx';
import Loader from '../Componets/UI/Loader/Loader.jsx';
import Pagination from '../Componets/UI/pagination/Pagination.jsx';

import MySelect from '../Componets/UI/select/MySelect.jsx';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const LastElement=useRef()
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts,...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    });

useObserver(LastElement,page,totalPages,isPostsLoading,()=>{
    setPage(page+1);
});
    useEffect(() => {
        fetchPosts(limit,page);
    }, [page,limit]);

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
            <MySelect value={limit} onChanghe={value=>setLimit(value)} 
                defaultValue='колво эл на стр'
                options={[
                    { value: 5, name: '5'   },
                    { value: 10, name: '10' },
                    { value: 20, name: '20' },
                    { value: 30, name: '30' },
                    { value: -1, name: 'все'},
                ]}
                />
            {postError && <h1>Error happened{postError}</h1>}
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Lists of items'} />
            <div ref={LastElement} style={{height:20,background:'red'}}/>
            {isPostsLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <Loader />
                </div>
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
}
export default Posts;
