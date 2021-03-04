import './Profile.css';
import { Divider } from '@material-ui/core';
import TurnedInIcon from '@material-ui/icons/TurnedIn';

export default function Profile() {
    return (
        <div className='profile__container'>
            <div className='profile__banner'>

            </div>
            <div className='profile__details'>
                <img src='https://picsum.photos/200' className='avatar' alt='PP' />
                <h3>Evan Uwao</h3>
                <p style={{ fontSize: 12, color: 'gray', paddingBottom: 20 }}>Full Stack Developer</p>
            </div>

            <Divider style={{ width: '100%', color: '#000' }} />

            <div className='profile__followers'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ fontSize: 12, color: 'gray', paddingLeft: 10 }}>Connections</p>
                    <p style={{ color: 'blue', fontSize: 12, paddingRight: 10 }}>21</p>
                </div>
                <p style={{ fontSize: 12, paddingLeft: 10 }}>Grow your Network</p>
            </div>

            <Divider style={{ width: '100%', color: '#000' }} />

            <div className='profile__followers'>
                <p style={{ fontSize: 12, paddingLeft: 10 }}>Grow your Network</p>
            </div>

            <Divider style={{ width: '100%', color: '#000' }} />

            <div className='profile__followers'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                    <TurnedInIcon fontSize='small' />
                    <p style={{ fontSize: 12, paddingLeft: 5 }}>Grow your Network</p>
                </div>
            </div>
        </div>
    )
}