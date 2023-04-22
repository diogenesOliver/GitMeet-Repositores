import '../style/ComponentSeacrh.css'

import { useState } from 'react'
import { DynamicComponent } from './DynamicComponent'

export function Seacrh() {

    const [value, setValue] = useState()

    const handleChange = (event: any) => {
        setValue(event.target.value)
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search the user's GitHub..."
                className="input-search"
                onChange={handleChange}
            />
            <DynamicComponent target={value}/>
        </>

    )
}