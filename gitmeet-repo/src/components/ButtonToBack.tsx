import '../style/ButtonBackToHomePage.css';

import { useNavigate } from 'react-router-dom';
import img from '../assets/icons8-back-50.png';

export function ButtonToBackFromHomePageComponent() {
    const navigate = useNavigate()
    const goToHomePage = () => {
        navigate('/')
    }

    return (
        <>
            <button
            onClick={goToHomePage}
                className='button-back'
                >
                <img src={img} alt="Icon back to home page" />
                <p>Back to home page...</p>
            </button>
        </>
    )
}