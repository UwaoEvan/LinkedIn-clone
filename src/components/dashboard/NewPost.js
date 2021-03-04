import './NewPost.css';
import { Avatar } from '@material-ui/core';
import { CropOriginal, YouTube, Event, FormatListBulleted } from '@material-ui/icons';

import FormIcons from '../reusable/FormIcons';

export default function NewPost() {
    return (
        <div className='newpost__container'>
            <div className='newpost__header'>
                <Avatar src='https://picsum.photos/200' />
                <form style={{ width: '100%' }}>
                    <input type="text" placeholder='Start a post' />
                </form>
            </div>
            <div className='newpost__icons'>
                <FormIcons Icon={CropOriginal} title='Photo' color='#70b5f9' />
                <FormIcons Icon={YouTube} title='Video' color='#7fc15e' />
                <FormIcons Icon={Event} title='Event' color='#e7a33e' />
                <FormIcons Icon={FormatListBulleted} title='Write article' color='#f5987e' />
            </div>
        </div>
    )
}