import logo from '/logo-name.svg'

export default function Header() {
    const now = new Date();

    return (

        <header>
            {/* <h3>test</h3> */}
            <img src={logo} alt="test" />
            <span>time: {now.toLocaleTimeString()}</span>
        </header>
    );
}
