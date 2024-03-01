import { useState } from 'react'
import logo from '/logo-name.svg'

export default function Header() {

    const [now, setNow] = useState(new Date())
    setInterval(() => setNow(new Date()), 1000)

    return (

        <header>
            {/* <h3>test</h3> */}
            <img src={logo} alt="test" />
            <span>time: {now.toLocaleTimeString()}</span>
        </header>
    );
}
