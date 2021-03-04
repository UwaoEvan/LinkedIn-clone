import './FormIcons.css';

export default function FormIcons({ Icon, title, color, clicked }) {
    return (
        <button className='formicons__container' onClick={clicked}>
            {Icon && <Icon style={{ color: color }} />}
            <p>{title}</p>
        </button >
    )
}