import './Header.css';
import { Search, Home, SupervisorAccount, BusinessCenter, QuestionAnswer, Notifications, Apps } from '@material-ui/icons';

import HeaderIcons from '../reusable/HeaderIcons';

export default function Header() {
    return (
        <div className='header__container'>
            <div className='header__left'>
                <img src={process.env.PUBLIC_URL + '/Linkedin.png'} alt='logo' />
                <div className='header__search'>
                    <Search fontSize='small' style={{ padding: 8 }} />
                    <form>
                        <input type='text' placeholder='Search' />
                    </form>
                </div>
            </div>
            <div className='header__right'>
                <HeaderIcons Icon={Home} text='Home' />
                <HeaderIcons Icon={SupervisorAccount} text='My Network' />
                <HeaderIcons Icon={BusinessCenter} text='Jobs' />
                <HeaderIcons Icon={QuestionAnswer} text='Messaging' />
                <HeaderIcons Icon={Notifications} text='Notifications' />
                <HeaderIcons Icon={Apps} text='Work' />
            </div>
        </div>
    )
}