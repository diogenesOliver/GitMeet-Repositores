import '../style/ComponentButton.css'

import { useNavigate } from 'react-router-dom'

export function Button() {

    const navigate = useNavigate()
    const goToRepositoriesPage = () => {
        navigate('/repositories')
    }

    return (
        <button
            onClick={goToRepositoriesPage}
        >
            Search...
        </button>
    )
}