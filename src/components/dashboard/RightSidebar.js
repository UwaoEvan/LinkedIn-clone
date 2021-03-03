import './RightSidebar.css';
import Aside from './Aside';
import Courses from './Courses';

export default function RightSidebar() {
    return (
        <div className='rightsidebar__container'>
            <Aside />
            <Courses />
        </div>
    )
}