import MyInput from './UI/input/MyInput.jsx';
import MySelect from './UI/select/MySelect.jsx';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput placeholder="Search..." value={[searchQuery]} onChange={(e) => setSearchQuery(e.target.value)} />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Sort"
                options={[
                    { value: 'title', name: 'By name' },
                    { value: 'body', name: 'By description' },
                ]}
            />
        </div>
    );
};

export default PostFilter;
