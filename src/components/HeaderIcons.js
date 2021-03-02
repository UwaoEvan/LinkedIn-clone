import './HeaderIcons.css';

export default function HeaderIcons({ Icon, text }) {
    return (
        <div className='headericons__container'>
            {Icon && <Icon className='headericons__icon' />}
            <p>{text}</p>
        </div>
    )
}