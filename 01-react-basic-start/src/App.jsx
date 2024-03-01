import Header from './components/Header'
import WebDeveloper from './components/WebDeveloper'
import Button from './components/Button/Button'
import { useState } from 'react'
import { WebDevelopers, differences } from './data'


export default function App() {
    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
        console.log('click', type)
        setContentType(type)
    }

    /* let tabContent = null
    if (contentType){
        tabContent = <p>{differences[contentType]}</p>
    }
    else{
        tabContent = <p>Click btn</p>
    } */

    return (
        <div>
            <Header />
            <main>
                <section>
                    <h3>WEB-РАЗРАБОТЧИК</h3>
                    <ul>
                        {WebDevelopers.map(el =>
                            <WebDeveloper key={el.title} {...el} />)}
                    </ul>
                    <Button isActive={contentType === 'click1'} onClick={() => handleClick('click1')}>Click 1</Button>
                    <Button isActive={contentType === 'click2'} onClick={() => handleClick('click2')}>Click 2</Button>
                    <Button isActive={contentType === 'click3'} onClick={() => handleClick('click3')}>Click 3</Button>

                    {/* {contentType ? <p>{differences[contentType]}</p> : <p>Click btn</p>}

                    {!contentType ? <p>Click btn</p> : null}
                    {contentType ? <p>{differences[contentType]}</p> : null} */}

                    {!contentType && <p>Click btn</p>}
                    {contentType && <p>{differences[contentType]}</p>}

                    {/* {tabContent} */}

                </section>
            </main>
        </div>
    );
}
