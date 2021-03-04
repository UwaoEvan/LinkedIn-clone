import './Comment.css';

export default function Comment() {
    return (
        <div className='comment__container'>
            <img src='https://picsum.photos/200' alt='profile' />
            <form style={{ width: '100%' }}>
                <input type='text' placeholder='Add a comment' />
            </form>
        </div>
    )
}