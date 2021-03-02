import './FormIcons.css';

export default function FormIcons({ Icon, title, color }) {
    return (
        <div className='formicons__container'>
            {Icon && <Icon style={{ color: color }} />}
            <p>{title}</p>
        </div>
    )
}