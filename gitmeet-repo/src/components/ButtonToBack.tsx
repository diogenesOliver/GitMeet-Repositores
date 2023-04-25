import { useNavigate } from 'react-router-dom'

export function ButtonToBackFromHomePageComponent() {
    const navigate = useNavigate()
    const goToHomePage = () => {
        navigate('/')
    }

    return (
        <button
            onClick={goToHomePage}
            className='button-back'
        >
            Back
        </button>
    )
}