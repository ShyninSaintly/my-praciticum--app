import MyInput from './UI/input/MyInput.jsx';
import MySelect from './UI/select/MySelect.jsx';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                placeholder="Search..."
                value={[filter.query]}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
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
