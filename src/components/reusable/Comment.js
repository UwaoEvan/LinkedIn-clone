import './Comment.css';
import { MoreHoriz } from '@material-ui/icons';

export default function Comment() {
    return (
        <>
            <div className='comment__container'>
                <img src='https://picsum.photos/200' alt='profile' />
                <form style={{ width: '100%' }}>
                    <input type='text' placeholder='Add a comment' />
                </form>
            </div>
            <div className='comment__details'>
                <img src='https://picsum.photos/200' alt='name' />
                <div className='comment__owner'>
                    <div className='comment__header'>
                        <div>
                            <h5>Evan Uwao</h5>
                            <p className='comment__info'>Front-End Developer | Mobile Developer</p>
                            <p className='comment__info'>1w</p>
                            <p className='comment__quote'>Very nice!!</p>
                        </div>
                        <div className='comment__right'>
                            <p>4d</p>
                            <MoreHoriz style={{ color: 'gray', fontSize: 18 }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='comment__buttons'>
                <p>Like</p>
                <p>.</p>
                <p>Reply</p>
            </div>
        </>
    )
}