import '../style/ComponentSeacrh.css'

import axios from 'axios'

import { useState } from 'react'
import { DynamicComponent } from './DynamicComponent'

export function Seacrh() {

    const [value, setValue] = useState()

    const handleChange = async (event: any) => {
        setValue(event.target.value)
        await axios.get(`https://api.github.com/users/${value}`)
            .then(res => console.log(res.data))
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search the user's GitHub..."
                className="input-search"
                onChange={handleChange}
            />
            <DynamicComponent target={value} />
        </>

    )
}