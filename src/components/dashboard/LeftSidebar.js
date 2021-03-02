import Profile from './Profile';
import HashTags from './HashTags';
import './LeftSideBar.css';

export default function LeftSidebar() {
    return (
        <div className='leftsidebar'>
            <Profile />
            <HashTags />
        </div>
    )
}