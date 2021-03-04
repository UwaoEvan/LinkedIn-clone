import { useState } from 'react';
import './Post.css';
import { Avatar, Divider } from '@material-ui/core';
import { FiThumbsUp, FiMessageCircle, FiCornerUpRight, FiSend } from "react-icons/fi";

import FormIcons from '../reusable/FormIcons';
import Comment from '../reusable/Comment';

export default function Post() {
    const [show, setShow] = useState(false);
    return (
        <div className='post__container'>

            <div className='post__details'>
                <Avatar src='https://picsum.photos/200' />
                <div className='post_name'>
                    <h5>Evan Uwao</h5>
                    <p>Front-End Developer | Mobile Developer</p>
                    <p>1w</p>
                </div>
            </div>

            <div className='post__content'>
                <p>The right connection can change
                your entire life.</p>
            </div>

            <Divider style={{ width: '100%', color: '#000' }} />

            <div className='post__buttons'>
                <FormIcons Icon={FiThumbsUp} title='Like' color='gray' />
                <FormIcons Icon={FiMessageCircle} title='Comment' color='gray' clicked={() => setShow(!show)} />
                <FormIcons Icon={FiCornerUpRight} title='Share' color='gray' />
                <FormIcons Icon={FiSend} title='Send' color='gray' />
            </div>
            {show && <Comment />}
        </div>
    )
}