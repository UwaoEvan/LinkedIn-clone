import './Aside.css';
import InfoIcon from '@material-ui/icons/Info';

export default function Aside() {
    return (
        <div className='aside__container'>
            <div className='aside__title'>
                <h4>Add to your feed</h4>
                <InfoIcon />
            </div>
            <div className='aside__follow'>

            </div>
        </div>
    )
}