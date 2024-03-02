import { useState } from 'react'

export default function useImput(defaultValue = '') {
    const [value, setValue] = useState()

    return {
        value,
        onChange: (event) => setValue(event.target.value),
    }
}
