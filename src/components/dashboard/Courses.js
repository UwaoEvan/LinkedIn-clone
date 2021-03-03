import './Courses.css';
import InfoIcon from '@material-ui/icons/Info';

export default function Courses() {
    return (
        <div className='courses__container'>
            <div className='courses__title'>
                <h4>Todays most viewed courses</h4>
                <InfoIcon />
            </div>
            <div className='courses__details'>
                <ol>
                    <li>
                        <h5>Loop inside React JSX</h5>
                        <p className='details'>The search supports synonyms</p>
                    </li>
                    <li>
                        <h5>Loop inside React JSX</h5>
                        <p className='details'>The search supports synonyms</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}