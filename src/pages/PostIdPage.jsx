import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching.js';
import PostService from '../API/PostService.js';
import Loader from '../Componets/UI/Loader/Loader.jsx';
const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, errorCom] = useFetching(async () => {
        const response = await PostService.getComments(params.id);
        setComment(response.data);
    });
    useEffect(() => {
        if (params.id) {
            fetchPostById(params.id);
            fetchComments(params.id);
        }
    }, [params.id]);
    return (
        <>
            <h1>Post number {params.id}</h1>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    {post.id}.{post.title}
                </div>
            )}
            <h1>Comments</h1>
            {isComLoading ? (
                <Loader />
            ) : (
                <div>
                    {comment.map((comm) => (
                        <div style={{ marginTop: '10px' }}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
export default PostIdPage;
