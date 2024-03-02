import Button from './Button/Button'
import { differences } from '../data'

import { useState } from 'react'

export default function Section1() {
    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
        console.log('click', type)
        setContentType(type)
    }

    return (
        <section>
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
    )
}