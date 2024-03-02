//import './Header.css'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import logo from '/logo-name.svg'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`

export default function Header() {

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000)
        return () => {
            clearInterval(interval) // от утечки памяти
        }
    }, [])

    const [now, setNow] = useState(new Date())


    return (

        <HeaderContainer>
            {/* <h3>test</h3> */}
            <img src={logo} alt="test" />
            <span>time: {now.toLocaleTimeString()}</span>
        </HeaderContainer>
    );
}