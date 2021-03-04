import './Dashboard.css';

import NewPost from './NewPost';
import Post from './Post';

export default function Dashboard() {
    return (
        <div className='dashboard__container'>
            <NewPost />
            <Post />
            <Post />
            <Post />
        </div>
    )
}